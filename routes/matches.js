import { Router } from "express";
const router = Router();
import { users } from "../config/mongoCollections.js";
import { ObjectId } from "mongodb";
import { userData } from "../data/index.js";
import xss from "xss";

const checkSession = (req, res, next) => {
    if (!req.session.userId) {
      return res.redirect("/");
    }
    next();
};

router.get("/:id", checkSession, async(req,res) =>{
    try {
      const userId = req.params.id;
      const userCollection = await users();
      const currentUser = await userCollection.findOne({
        _id: new ObjectId(userId),
      });
      const allUsers = await userCollection.find().toArray();
      const potentialMatches = allUsers.filter(
        (user) => user._id.toString() === currentUser._id.toString()
      );
      const likedUsers = potentialMatches.map(match => match.likedUsers).filter(Boolean).flat();
      const likedBy = potentialMatches.map(match => match.likedBy).filter(Boolean).flat();

      let matchedUser=[];
      likedUsers.forEach((user) => {
        if (likedBy.includes(user)) {
          matchedUser.push(user.toString());
        }
    })
    const userInfo = allUsers.filter(user => matchedUser.includes((user._id.toString())));
 
    let matchesId = [];
    currentUser.matches.forEach((user)=>{
      matchesId.push(user.toString());
    });

    userInfo.forEach((user)=>{
      if(!matchesId.includes(user._id.toString())){
        matchesId.push(user._id.toString());
      }
    });

    for (const id of matchesId){
      const matchesInfo = await userCollection.updateOne(
         {_id : new ObjectId (userId)},
         {$addToSet : { matches : id}}
      );
    }
     
    res.render("matches/matches", { users: userInfo, userId: userId});
    } catch (error) {
      res.status(500).render("error", { error: error });
    }
  });

  router.post("/:id/unmatch", checkSession, async (req, res) => {
    try {
      const userId = req.session.userId;
      const unmatchedUserId = req.params.id;

      const userCollection = await users();
      const currentUser = await userCollection.findOne({
        _id: new ObjectId(userId),
      });

      const unmatchedUser = await userCollection.findOne({
        _id: new ObjectId(unmatchedUserId),
      });

      if (currentUser.likedUsers.includes(unmatchedUserId)) {
        const likedUser = currentUser.likedUsers;
        const unMatched = likedUser.filter(
          (user) => JSON.stringify(user) !== JSON.stringify(unmatchedUserId)
        );
        await userCollection.updateOne(
          { _id: new ObjectId(userId) },
          { $set: { likedUsers: unMatched } }
        );
      }
      
      if (currentUser.matches.includes(unmatchedUserId)) {
        const matchedUser = currentUser.matches;
        const unMatched = matchedUser.filter(
          (user) => JSON.stringify(user) !== JSON.stringify(unmatchedUserId)
        );
        await userCollection.updateOne(
          { _id: new ObjectId(userId) },
          { $set: { matches: unMatched } }
        );
      }

      // Remove userId from unmatchedUser's matches array
      if (unmatchedUser.likedBy.includes(userId)) {
        const matchesUser = unmatchedUser.likedBy;
        const unMatched = matchesUser.filter(
          (user) => JSON.stringify(user) !== JSON.stringify(userId)
        );
        await userCollection.updateOne(
          { _id: new ObjectId(unmatchedUserId) },
          { $set: { likedBy: unMatched } }
        );
      }

      res.redirect("/matches/" + userId);
    } catch (error) {
      res.status(500).render("error", { error: error });
    }
  });

  router.get("/:id/viewProfile", checkSession, async(req,res) =>{
    try {
      const userId = req.params.id;
      const currUserId = req.session.userId;
      const user = await userData.get(userId);
      res.render("matches/viewMatches", { user: user, currUserId : currUserId});
    } catch (error) {
      res.status(500).render("error", { error: error });
    }
  });

router.route("/:id/search").
get(async(req,res) => {
   const userCollection = await users();
   const userId = req.params.id;
   const {search} = (req.query);
   const sanitizedSearch = xss(search);
   const currentUser = await userCollection.findOne({
     _id: new ObjectId(userId),
   });

   let filter = {
    _id: { $ne: new ObjectId(userId) },
    isPaused: false,
    $and: [
      { _id: { $in: currentUser.likedUsers.map(id => new ObjectId(id)) } },
      { _id: { $in: currentUser.likedBy.map(id => new ObjectId(id)) } },
      { _id: { $nin: currentUser.dislikedUsers.map(id => new ObjectId(id)) } },
    ]
  };

   if(search){
    filter = {
      ...filter,
      name: { $regex: new RegExp(sanitizedSearch, "i") },
    };
   }else{
     filter = {
      ...filter,
      name: { $ne: null },
     };
   }

   const searchUsers = await userCollection.find(filter).toArray();

   res.render("matches/matches",{
     title:"Matches",
     users: searchUsers,
     userId,
     search,
   });
})

  export default router;
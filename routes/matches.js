import { Router } from "express";
const router = Router();
import { users } from "../config/mongoCollections.js";
import { ObjectId } from "mongodb";
import { userData } from "../data/index.js";

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

      if (currentUser.likedUsers.includes(unmatchedUserId)) {
        const likedUser = currentUser.likedUsers;
        const unMatched = likedUser.filter(
          (user) => JSON.stringify(user) !== JSON.stringify(unmatchedUserId)
        );
        await userCollection.updateOne(
          { _id: new ObjectId(userId) },
          { $set: { likedUsers: unMatched} }
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
      const user = await userData.get(userId);
      console.log("User: "+ JSON.stringify(user));
      res.render("matches/viewMatches", { user: user });
    } catch (error) {
      res.status(500).render("error", { error: error });
    }
  });

  export default router;
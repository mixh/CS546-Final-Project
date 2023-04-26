/// TODO - CHANGE THE CODE FOR RADIUS AT SUBMISSION TIME. RIGHT NOW IT IS AT 50 Kms  

import { Router } from "express";
const router = Router();
import axios from "axios";
import { userData } from "../data/index.js";
import { users } from "../config/mongoCollections.js";
import validation from "../validation.js";
import { ObjectId } from "mongodb";

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

    const likedUsers = currentUser.likedUsers.map((id) => new ObjectId(id));
    const dislikedUsers = currentUser.dislikedUsers.map(
      (id) => new ObjectId(id)
    );

    const allUsers = await userCollection.find().toArray();

    // TODO - IMPLEMENT THE BUTTON FUNCTIONALITY FOR FILTER ON AND OFF 
    // const distanceParam = req.query.distance || "all"; // provide a default value for distanceParam
    // const maxDistance = distanceParam === "all" ? 1000000 : parseInt(distanceParam);


    // Find users within 5 miles of the current user
    const potentialMatches = await userCollection
      .find({
        $or: [//checks if either of the places are same
          { university: currentUser.university },
          { work: currentUser.work },
          { gym: currentUser.gym },
          { bucketlist: { $in: currentUser.bucketlist } } 
        ],
        $and: [
          { _id: { $ne: new ObjectId(userId) } },
          { _id: { $nin: likedUsers } },
          { _id: { $nin: dislikedUsers } },
          {
            location: {
              $near: {
                $geometry: {
                  type: "Point",
                  coordinates: currentUser.location.coordinates,
                },
                $maxDistance: 50000
              },
            },
          },
          { isPaused: { $ne: true } }
        ],
      })
      .toArray();

    res.render("matches/potentialMatches", { users: potentialMatches, userId: userId });
  } catch (error) {
    res.status(500).render("error", { error: error });
  }
})

router.post("/:id/like", checkSession, async (req, res) => {
  try {
    const userId = req.session.userId;
    const likedUserId = req.params.id;

    const userCollection = await users();
    const currentUser = await userCollection.findOne({
      _id: new ObjectId(userId),
    });

    
    if (!currentUser.likedUsers.includes(likedUserId)) {
      await userCollection.updateOne(
        { _id: new ObjectId(userId) },
        { $push: { likedUsers: likedUserId } }
        );

        const likedUser = await userCollection.findOne({
          _id: new ObjectId(likedUserId),
        });

        if(!likedUser.likedBy.includes(userId)){
          await userCollection.updateOne(
            {_id : new ObjectId (likedUserId)},
            {$push : { likedBy : userId}}
          )
        }

        if(likedUser.likedBy.includes(userId)){
          const match = {
            _id : new ObjectId (likedUserId),
            messages : []
          };

          await userCollection.updateOne(
            {
              _id : new ObjectId(userId)
            },{
              $push : {matches : match}
            }
          )

          await userCollection.updateOne(
            {
              _id : new ObjectId(likedUserId)
            },{
              $push : {matches : match}
            }
          )

        }
        console.log(likedUser);
      }



    res.redirect("/potentialMatches/" + userId);
  } catch (error) {
    res.status(500).render("error", { error: error });
  }
});

router.post("/:id/dislike", checkSession, async (req, res) => {
  try {
    const userId = req.session.userId;
    const dislikedUserId = req.params.id;

    const userCollection = await users();
    const currentUser = await userCollection.findOne({
      _id: new ObjectId(userId),
    });

    if (!currentUser.dislikedUsers.includes(dislikedUserId)) {
      await userCollection.updateOne(
        { _id: new ObjectId(userId) },
        { $push: { dislikedUsers: dislikedUserId } }
      );
    }

    res.redirect("/potentialMatches/" + userId);
  } catch (error) {
    res.status(500).render("error", { error: error });
  }
});


export default router;
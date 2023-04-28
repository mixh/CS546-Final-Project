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

router.get("/:id", checkSession, async (req, res) => {
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

    // Check if the user's profile is paused
    if (currentUser.isPaused) {
      const uId = req.params.id;
      const user = await userData.get(uId);
      return res.render("profile/pausedProfile", { user });
    }

    // Check the "distance" query parameter
    const distance = req.query.distance || "all";

    // Define the $and query for finding potential matches
    const andQuery = [
      { _id: { $ne: new ObjectId(userId) } },
      { _id: { $nin: likedUsers } },
      { _id: { $nin: dislikedUsers } },
      { isPaused: { $ne: true } },
    ];

    // Define the $or query for finding potential matches
    const orQuery = [
      //checks if either of the places are same
      { university: currentUser.university },
      { work: currentUser.work },
      { gym: currentUser.gym },
      // { bucketlist: { $in: currentUser.bucketlist? currentUser.bucketlist:[] } },
    ];
    const orQueryFiltered = orQuery.filter((obj) => {
      return Object.values(obj)[0] !== undefined && Object.values(obj)[0] !== null;
    });

    // Find potential matches based on distance and $and/$or queries
    let potentialMatches = [];
    if (distance === "5km") {
      potentialMatches = await userCollection
        .find({
          $and: [
            ...andQuery,
            {
              location: {
                $near: {
                  $geometry: {
                    type: "Point",
                    coordinates: currentUser.location.coordinates,
                  },
                  $maxDistance: 5000,
                },
              },
            },
          ],
          $or: [...orQueryFiltered],
        })
        .toArray();
    } else {
      potentialMatches = await userCollection
        .find({
          $and: andQuery,
          $or: [...orQueryFiltered],
        })
        .toArray();
    }

    // Set flags to indicate which fields matched for each potential match
    const potentialMatchesWithFlags = potentialMatches.map((match) => {
      return {
        ...match,
        u: orQueryFiltered[0] ? match.university === currentUser.university : false,
        w: orQueryFiltered[1] ? match.work === currentUser.work : false,
        g: orQueryFiltered[2] ? match.gym === currentUser.gym : false,
      };
    });

    res.render("matches/potentialMatches", {
      users: potentialMatchesWithFlags,
      userId: userId,
      distance: distance,
    });
  } catch (error) {
    res.status(500).render("error", { error: error });
  }
});


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
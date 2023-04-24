/// TODO - THIS ROUTE IS A WORK IN PROGRESS THUS NO LINK IS PROVIDED AS OF NOW 

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

    // const potentialMatches = allUsers.filter(
    //   (user) => user._id.toString() !== currentUser._id.toString()
    // );

    // const potentialMatches = await userCollection
    //   .find({
    //     $and: [
    //       { _id: { $ne: new ObjectId(userId) } },
    //       { _id: { $nin: likedUsers } },
    //       { _id: { $nin: dislikedUsers } },
    //     ],
    //   })
    //   .toArray();

    // Find users within 5 miles of the current user
    const potentialMatches = await userCollection
      .find({
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
                $maxDistance: 5000,
              },
            },
          },
        ],
      })
      .toArray();

    res.render("matches/potentialMatches", { users: potentialMatches });
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


// location: {
//           $near: {
//             $geometry: {
//               type: "Point",
//               coordinates: currentUser.location.coordinates
//             },
//             $maxDistance: 8046.72 // 5 miles in meters
//           }
//         }
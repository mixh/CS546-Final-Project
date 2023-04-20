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
    const allUsers = await userCollection.find().toArray();
    const potentialMatches = allUsers.filter(
      (user) => user._id.toString() !== currentUser._id.toString()
    );
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
    const likedUser = await userCollection.findOne({
      _id: new ObjectId(likedUserId),
    });

    if (!currentUser.likedUsers.includes(likedUserId)) {
      await userCollection.updateOne(
        { _id: new ObjectId(userId) },
        { $push: { likedUsers: likedUserId } }
      );

      if (likedUser.likedBy.includes(userId)) {
        await userCollection.updateOne(
          { _id: new ObjectId(likedUserId) },
          { $pull: { likedBy: userId }, $push: { matches: userId } }
        );
        await userCollection.updateOne(
          { _id: new ObjectId(userId) },
          {
            $pull: { likedUsers: likedUserId },
            $push: { matches: likedUserId },
          }
        );
      } else {
        await userCollection.updateOne(
          { _id: new ObjectId(userId) },
          { $pull: { likedUsers: likedUserId } }
        );
      }
    }

    res.redirect("/potentialMatches");
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

    res.redirect("/potentialMatches");
  } catch (error) {
    res.status(500).render("error", { error: error });
  }
});



// router
// .get("/:id", checkSession, async (req, res) => {
//   try {
//     const userId = req.params.id;
//     const userCollection = await users();
//     const currentUser = await userCollection.findOne({ _id: new ObjectId(userId) });
//     const potentialMatches = await userCollection.find({
//       $and: [
//         { _id: { $ne: new ObjectId(userId) } }, // exclude current user
//         { _id: { $nin: currentUser.likedUsers.map(id => new ObjectId(id)) } }, // exclude already liked users
//         { _id: { $nin: currentUser.dislikedUsers.map(id => new ObjectId(id)) } }, // exclude already disliked users
//       ]
//     }).limit(10).toArray(); // limit to 10 potential matches

//     res.render("matches/potentialMatches", { currentUser, potentialMatches });
//   } catch (err) {
//     console.error(err);
//     res.status(500).send("Internal Server Error");
//   }
// })

// import { get, update } from "../data/users.js";

// router.post("/:userId/like/:likedUserId", async (req, res) => {
//   try {
//     const currentUser = await get(req.params.userId);
//     const likedUser = await get(req.params.likedUserId);

//     // Update current user's likedUsers array and save to MongoDB
//     currentUser.likedUsers.push(likedUser._id);
//     await update(currentUser);

//     // Check if the liked user has also liked the current user
//     if (likedUser.likedUsers.includes(currentUser._id)) {
//       // Create a new match by adding both users' IDs to each other's matches array
//       currentUser.matches.push(likedUser._id);
//       likedUser.matches.push(currentUser._id);
//       await update(currentUser);
//       await update(likedUser);
//       // TODO: send a notification to both users about the match
//     }

//     res.redirect("/" + req.params.userId);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send("Internal Server Error");
//   }
// });

// router.post(
//   "/:userId/dislike/:dislikedUserId",
//   async (req, res) => {
//     try {
//       const currentUser = await get(req.params.userId);
//       const dislikedUser = await get(req.params.dislikedUserId);

//       // Update current user's dislikedUsers array and save to MongoDB
//       currentUser.dislikedUsers.push(dislikedUser._id);
//       await update(currentUser);

//       res.redirect("/" + req.params.userId);
//     } catch (err) {
//       console.error(err);
//       res.status(500).send("Internal Server Error");
//     }
//   }
// );



export default router;
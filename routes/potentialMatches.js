import { Router } from "express";
const router = Router();
import axios from "axios";
import { userData } from "../data/index.js";
import { users } from "../config/mongoCollections.js";
import validation from "../validation.js";

const checkSession = (req, res, next) => {
  if (!req.session.userId) {
    return res.redirect("/");
  }
  next();
};

router
.get("/:id", checkSession, async (req, res) => {
  try {
    const userId = req.params.id;
    const userCollection = await users();
    const currentUser = await userCollection.findOne({ _id: new ObjectId(userId) });
    const potentialMatches = await userCollection.find({
      $and: [
        { _id: { $ne: new ObjectId(userId) } }, // exclude current user
        { _id: { $nin: currentUser.likedUsers.map(id => new ObjectId(id)) } }, // exclude already liked users
        { _id: { $nin: currentUser.dislikedUsers.map(id => new ObjectId(id)) } }, // exclude already disliked users
      ]
    }).limit(10).toArray(); // limit to 10 potential matches

    res.render("matches/potentialMatches", { currentUser, potentialMatches });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
})

import { get, update } from "../data/users.js";

router.post("/:userId/like/:likedUserId", async (req, res) => {
  try {
    const currentUser = await get(req.params.userId);
    const likedUser = await get(req.params.likedUserId);

    // Update current user's likedUsers array and save to MongoDB
    currentUser.likedUsers.push(likedUser._id);
    await update(currentUser);

    // Check if the liked user has also liked the current user
    if (likedUser.likedUsers.includes(currentUser._id)) {
      // Create a new match by adding both users' IDs to each other's matches array
      currentUser.matches.push(likedUser._id);
      likedUser.matches.push(currentUser._id);
      await update(currentUser);
      await update(likedUser);
      // TODO: send a notification to both users about the match
    }

    res.redirect("/" + req.params.userId);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

router.post(
  "/:userId/dislike/:dislikedUserId",
  async (req, res) => {
    try {
      const currentUser = await get(req.params.userId);
      const dislikedUser = await get(req.params.dislikedUserId);

      // Update current user's dislikedUsers array and save to MongoDB
      currentUser.dislikedUsers.push(dislikedUser._id);
      await update(currentUser);

      res.redirect("/" + req.params.userId);
    } catch (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
    }
  }
);



export default router;
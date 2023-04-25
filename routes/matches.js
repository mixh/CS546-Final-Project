import { Router } from "express";
const router = Router();
import { users } from "../config/mongoCollections.js";
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
        (user) => user._id.toString() === currentUser._id.toString()
      );
      const likedUsers = potentialMatches.map(match => match.likedUsers).filter(Boolean).flat();
      const likedBy = potentialMatches.map(match => match.likedBy).filter(Boolean).flat();

      let matchedUser;
      if(JSON.stringify(likedUsers) === JSON.stringify(likedBy)){
        matchedUser = allUsers.filter((user) => user._id.toString() === likedBy.toString()
          );
      }
      res.render("matches/matches", { users: matchedUser});
    } catch (error) {
      res.status(500).render("error", { error: error });
    }
  });

  export default router;
import { Router } from "express";
const router = Router();
import axios from "axios";
import { messageData } from "../data/index.js";
import { messages } from "../config/mongoCollections.js";
import { userData } from "../data/index.js";
import { users } from "../config/mongoCollections.js";
import validation from "../validation.js";
import { ObjectId } from "mongodb";
import xss from "xss";

const checkSession = (req, res, next) => {
  if (!req.session.userId) {
    return res.redirect("/");
  }
  next();
};

router.get("/:userId/messages/:matchUserId", checkSession, async (req, res) => {
  try {
    const userId = req.params.userId;
    const matchUserId = req.params.matchUserId;

    // Fetch messages between users from the database
    const messagesCollection = await messages();
    const conversation = await messagesCollection
      .find({
        $or: [
          { senderId: userId, recieverId: matchUserId },
          { senderId: matchUserId, recieverId: userId },
        ],
      })
      .toArray();


          const userCollection = await users();
          const mu = await userCollection.findOne({
            _id: new ObjectId(matchUserId),
          });
          const muName = mu.name;

    // Render conversation view
    res.render("messages/conversation", {
      messages: conversation,
      userId: userId,
      matchUserId: matchUserId,
      muName : muName,
    });
  } catch (error) {
    res.status(500).render("error", { error: error });
  }
});

router.post("/:userId/messages/:matchUserId/send", checkSession, async (req, res) => {
  try {
    const senderId = req.params.userId;
    const recieverId = req.params.matchUserId;
    const content = xss(req.body.content);
    const createdAt = new Date();

    // Save the message in the database
    await messageData.createMessage(senderId, recieverId, content, createdAt);

    res.redirect("/messages/"+senderId+"/messages/"+recieverId);

  } catch (error) {
    res.status(500).render("error", { error: error });
  }
});

router.get("/:userId/messages", checkSession, async (req, res) => {
  try {
    const userId = req.params.userId;
    const userCollection = await users();
    const currentUser = await userCollection.findOne({
        _id: new ObjectId(userId),
    });

    let filter = {
      _id: { $ne: new ObjectId(userId) },
      isPaused: false,
      $and: [
        { _id: { $in: currentUser.matches.map(id => new ObjectId(id)) } },
      ]
    };

    const userMessageInfo = await userCollection.find(filter).toArray();

    res.render("messages/message", {
      users: userMessageInfo,
      userId: userId,
    });
  } catch (error) {
    res.status(500).render("error", { error: error });
  }
});

export default router;
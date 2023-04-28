import { messages } from "../config/mongoCollections.js";
import { ObjectId } from "mongodb";
import axios from "axios";
import { userData } from "./index.js";
import { users } from "../config/mongoCollections.js";

import validation from "../validation.js";
const saltRounds = 1; // TODO change it to 16 at final

export const createMessage = async (senderId, recieverId, content, createdAt) =>{
    const messagesCollection = await messages();

    const userCollection = await users();
    const senderUser = await userCollection.findOne({
        _id : new ObjectId (senderId),
    })

    const recieverUser = await userCollection.findOne({
      _id: new ObjectId(recieverId),
    });
    
    const newMessage = {
        senderId : senderId,
        recieverId : recieverId,
        content : content,
        createdAt : new Date(createdAt),
        senderName : senderUser.name,
        recieverName : recieverUser.name,
    };

    const insertInfo = await messagesCollection.insertOne(newMessage);
    if (!insertInfo.acknowledged || !insertInfo.insertedId)
    {
    throw new Error("Could not add message");
    }

    const newId = insertInfo.insertedId.toString();
    const message = await getMessageById(newId);
    return message;
}

export const getMessageById = async(id) =>{
    const messageCollection = await messages();
    const message = await messageCollection.findOne({ _id: new ObjectId(id) });
    if (!message) throw new Error("Message not found");
    return message;
}
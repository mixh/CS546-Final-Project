import { users } from "../config/mongoCollections.js";
import { ObjectId } from "mongodb";
import axios from "axios";

import bcrypt from "bcrypt";
import crypto from "crypto";
import validation from "../validation.js";
const saltRounds = 1;   //change it to 16 at final

export const create = async (
  name,
  email,
  password,
  age,
  gender,
  longitude,
  latitude,
  city,
  bio,
  preferences,
  image_destination,
  image_filename,
  image_path,
  university,
  work,
  gym,
  bucketlist,
) => {
  name = validation.checkString(name, "Name");
  email = validation.checkEmail(email, "Email");
  password = validation.checkPassword(password, "Password");
  age = validation.checkAge(age, "Age");
  bio = validation.checkString(bio, "Bio");
  const encryptedPassword = await bcrypt.hash(password, saltRounds);
  let user = {
    name: name,
    email: email.toLowerCase(),
    password: encryptedPassword,
    age: age,
    gender: gender,
    university:university,
    work:work,
    gym:gym,
    bucketlist:bucketlist,
    location: {
      type: "Point",
      coordinates: [longitude, latitude],
      city_name: city,
    },
    bio: bio,
    preferences: preferences,
    likedUsers: [],
    dislikedUsers: [],
    likedBy: [],
    matches: [],
    image: {
      destination : image_destination,
      filename : image_filename,
      path : image_path,
    },
  };
  const userCollection = await users();

    const existingUser = await userCollection.findOne({ email: email });
    if (existingUser) {
      throw "Email already exists";
    }


  const insertInfo = await userCollection.insertOne(user);
  if (!insertInfo.acknowledged || !insertInfo.insertedId) {
    throw "Could not add user";
  }
  const newId = insertInfo.insertedId.toString();
  const newUser = await get(newId);
  return newUser;
};


export const get = async (id) => {
  id = validation.checkId(id);
  const userCollection = await users();
  const u = await userCollection.findOne({ _id: new ObjectId(id) });
  if (u == null) throw "no such user found";
  u._id = u._id.toString();
  return u;
};

export const loginAuth = async (email, password) => {
  email = validation.checkEmail(email, "Email");
  password = validation.checkPassword(password, "Password");
  const userCollection = await users();
  const inDb = await userCollection.findOne({ email: email });
  if (!inDb) {
    throw "invalid email or password";
  } else {
    const dbPassword = inDb.password;
    let comparePassword = await bcrypt.compare(password, dbPassword);
    if (!comparePassword) {
      throw "Authentication failed";
    } else {
      return inDb;
    }
  }
};

export const getPeople = async (id) => {
  id = validation.checkId(id);
  const userCollection = await users();
  const currentUser = await userCollection.findOne({ _id: id });
  let userLikedBy= currentUser.likedBy;

  if (!userLikedBy){

    excludedUsers= [...currentUser.dislikedUsers,...currentUser.likedUsers,...currentUser.matches];
    const query = excludedUsers.length > 0 ? { _id: { $nin: excludedUsers } } : {};
    const showCollection = await userCollection.find(query).toArray();
    //display users

  }

  else{

    for(i in userLikedBy){
      const showCollection = await userCollection.findOne({ _id: i });
      //display user

      const result = await userCollection.updateOne(//remove the id from likedBy
        { _id: new ObjectID(id) },
        { $pull: { likedBy: new ObjectID(i) } }
      );

    }

  }

  };
  





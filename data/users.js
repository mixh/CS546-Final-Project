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

export const addProfile = async(profname, profemail, profgender, profage, proflocation, interests, 
    profbio)=> {
    let userProfile = {
        profname: profname, 
        profemail: profemail, 
        profgender: profgender, 
        profage: profage, 
        proflocation: proflocation, 
        interests: interests, 
        profbio: profbio
    };

    const userCollection = await users(); 
    const insertInfo = await userCollection.insertOne(userProfile);
    if (!insertInfo.acknowledged || !insertInfo.insertedId) {
        throw "Could not create profile";
    }
    const newId = insertInfo.insertedId.toString();
    const profile = await get(newId);
    return profile;
};

export const updateProfile = async(id, updatedProfile) =>{
    id = validation.checkId(id);
    updatedProfile.profname = validation.checkString(updatedProfile.profname, 'Name');
    updatedProfile.profemail = validation.checkEmail(updatedProfile.profemail, 'Email');
    updatedProfile.age = validation.checkAge(updatedProfile.age, 'Age');
    updatedProfile.proflocation = validation.checkString(updatedProfile.proflocation, 'Location');
    updatedProfile.profinterests = validation.checkString(updatedProfile.profinterests, 'Interests');
    updatedProfile.profbio = validation.checkString(updatedProfile.profbio, 'Bio');

    const userUpdateInfo = {
        name: updatedProfile.profname,
        email: updatedProfile.profemail,
        age: updatedProfile.age,
        location: updatedProfile.proflocation,
        bio: updatedProfile.profbio,
        interests: updatedProfile.profinterests
    };
    
    const userCollection = await users();
    const updateInfo = await userCollection.findOneAndUpdate(
       {_id: new ObjectId(id)},
       {$set: userUpdateInfo},
       {returnDocument: 'after'}
    );
    if (updateInfo.lastErrorObject.n === 0){
        throw `Error: Update failed, could not find a user with id of ${id}`;
    }
    return await updateInfo.value;
};

export const getPeople = async (id) => {
  id = validation.checkId(id);
  const userCollection = await users();
  const currentUser = await userCollection.findOne({ _id: id });
  let userLikedBy = currentUser.likedBy;

  if (!userLikedBy) {
    // Find potential matches based on university, work, gym, and bucketlist
    const query = {
      $or: [
        { university: currentUser.university },
        { work: currentUser.work },
        { gym: currentUser.gym },
        { bucketlist: { $in: currentUser.bucketlist } }
      ],
      _id: { $ne: id }
    };
    const excludedUsers = [...currentUser.dislikedUsers, ...currentUser.likedUsers, ...currentUser.matches];
    if (excludedUsers.length > 0) {
      query._id.$nin = excludedUsers;
    }
    const showCollection = await userCollection.find(query).toArray();
    return showCollection; // Return an array of users who match the criteria
  } else {
    for (const i of userLikedBy) {
      const showCollection = await userCollection.findOne({ _id: i });
      // Display user

      const result = await userCollection.updateOne(
        { _id: new ObjectID(id) },
        { $pull: { likedBy: new ObjectID(i) } }
      );
    }
  }
};

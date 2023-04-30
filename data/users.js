import { users } from "../config/mongoCollections.js";
import { ObjectId } from "mongodb";
import axios from "axios";

// TODO - DOTENV the API KEY I HAVE USED IT DIRECTLY RIGHT NOW
import * as dotenv from "dotenv";
dotenv.config();

//TODO - ASK TA/PROF if passwords need to be encrypted in database or the routing file
import bcrypt from "bcrypt";
import validation from "../validation.js";
const saltRounds = 1; // TODO change it to 16 at final

export const create = async (
  name,
  email,
  password,
  age,
  gender,
  zip,
  bio,
  image_destination,
  image_filename,
  image_path,
  university,
  work,
  gym,
  bucketlist
) => {
  name = validation.checkString(name, "Name");
  work = validation.checkString(work, "Work");
  email = validation.checkEmail(email, "Email");
  password = validation.checkPassword(password, "Password");
  age = validation.checkAge(age, "Age");
  bio = validation.checkString(bio, "Bio");
  const encryptedPassword = await bcrypt.hash(password, saltRounds);

  const API_KEY = process.env.API_KEY;
  const COUNTRY = "US";
  const geocodingEndpoint = `http://api.openweathermap.org/geo/1.0/zip?zip=${zip},${COUNTRY}&appid=${API_KEY}`;
  const geocodingResponse = await axios.get(geocodingEndpoint);
  const geocodingData = geocodingResponse.data;

  if (!geocodingData || !geocodingData.lat || !geocodingData.lon) {
    throw new Error("Invalid zip code or response format");
  }

  var lat = geocodingData.lat;
  var lon = geocodingData.lon;

  const reverseGeocodingEndpoint = `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${API_KEY}`;
  const reverseGeocodingResponse = await axios.get(reverseGeocodingEndpoint);
  const reverseGeocodingData = reverseGeocodingResponse.data;

  if (!reverseGeocodingData || !reverseGeocodingData[0].name) {
    throw new Error("Could not get city name or response format");
  }

  const city = reverseGeocodingData[0].name;


  let user = {
    name: name,
    email: email.toLowerCase(),
    password: encryptedPassword,
    age: age,
    gender: gender,
    university: university,
    work: work,
    gym: gym,
    bucketlist: bucketlist,
    location: {
      type: "Point",
      coordinates: [lon, lat],
    },
    city_name: city,
    zip: zip,
    bio: bio,
    likedUsers: [],
    dislikedUsers: [],
    likedBy: [],
    matches: [],
    image: {
      destination: image_destination,
      filename: image_filename,
      path: image_path,
    },
    isPaused: false,
  };
  const userCollection = await users();

  
  // Create a 2dsphere index on the location field
  await userCollection.createIndex({ location: "2dsphere" });

  const existingUser = await userCollection.findOne({ email: email });
  if (existingUser) {
    throw new Error("Email already exists");
  }

  const insertInfo = await userCollection.insertOne(user);
  if (!insertInfo.acknowledged || !insertInfo.insertedId) {
    throw new Error("Could not add user");
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
    throw new Error("invalid email or password");
  } else {
    const dbPassword = inDb.password;
    let comparePassword = await bcrypt.compare(password, dbPassword);
    if (!comparePassword) {
      throw new Error("User Authentication failed");
    } else {
      return inDb;
    }
  }
};

export const update = async (id, updateData) => {
  try {
    const userCollection = await users();
    const userData = await userCollection.findOne({ _id: new ObjectId(id) });
    if (!userData) {
      throw new Error(`User with id ${id} not found`);
    }
    const updateInfo = {};
    let hasChanges = false;
    for (const [key, value] of Object.entries(updateData)) {
      if (JSON.stringify(value) !== JSON.stringify(userData[key])) {
        updateInfo[key] = value;
        hasChanges = true;
      }
    }
    if (hasChanges) {
      const result = await userCollection.updateOne(
        { _id: new ObjectId(id) },
        { $set: updateInfo }
      );
      if (result.modifiedCount === 0) {
        throw new Error(`Could not update user with id ${id}`);
      }
    }
    return updateInfo; // returns the actual changes made in the database
  } catch (error) {
    throw new Error(error);
  }
};


export const getAll = async () => {
  const userCollection = await users();
  const allUsers = await userCollection.find().toArray();
  return allUsers.map((u) => {
    u._id = u._id.toString();
    return u;
  });
};



export const getPeople = async (id) => {
  id = validation.checkId(id);
  const userCollection = await users();
  const currentUser = await userCollection.findOne({ _id: id });
  let userLikedBy = currentUser.likedBy;

  if (!userLikedBy) {
    excludedUsers = [
      ...currentUser.dislikedUsers,
      ...currentUser.likedUsers,
      ...currentUser.matches,
    ];
    const query =
      excludedUsers.length > 0 ? { _id: { $nin: excludedUsers } } : {};
    const showCollection = await userCollection.find(query).toArray();
    //display users
  } else {
    for (i in userLikedBy) {
      const showCollection = await userCollection.findOne({ _id: i });
      //display user

      const result = await userCollection.updateOne(
        //remove the id from likedBy
        { _id: new ObjectID(id) },
        { $pull: { likedBy: new ObjectID(i) } }
      );
    }
  }
};

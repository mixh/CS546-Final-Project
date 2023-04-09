import { users } from "../config/mongoCollections.js";
import { ObjectId } from "mongodb";

import bcrypt  from "bcrypt";
import crypto from "crypto";
const saltRounds = 1;

export const create = async (
    name, email, password, age, gender, location, bio, preferences)=>{
        
        // need to write validate and trim functions for all inputs 

        const encryptedPassword = await bcrypt.hash(password, saltRounds);;

        let user = {
          name: name,
          email: email,
          password: encryptedPassword,
          age: age,
          gender: gender,
          location: location,
          bio: bio,
          preferences: preferences,
          likedUsers: [],
          dislikedUsers: [],
          matches: [],
        };

    const userCollection = await users();
    const insertInfo = await userCollection.insertOne(user);
    if (!insertInfo.acknowledged || !insertInfo.insertedId) {
        throw new Error("Could not add band");
    }
    const newId = insertInfo.insertedId.toString();
    const newUser = await get(newId);
    return newUser;
    }

export const get = async (id) =>{

    //need to write validate function for the id;

    const userCollection = await users();
    const u = await userCollection.findOne({_id: new ObjectId(id)});
    if(u== null) throw "no such user found";
    u._id = u._id.toString();
    return u;
}

export const loginAuth = async(email, password)=>{

    // need to validate and trim inputs email and password

    const userCollection = await users();
    const inDb = await userCollection.findOne({ email : email});
    if(!inDb){
        throw "invalid email or password";
    }
    else{
        const dbPassword = inDb.password;
        let comparePassword =  await bcrypt.compare(password,dbPassword);
        if(!comparePassword){
            throw "Authentication failed";
        } else{
            return inDb;  
    }}
}

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
    const insertInfo = await userCollection.insertOne(user);
    if (!insertInfo.acknowledged || !insertInfo.insertedId) {
        throw "Could not create profile";
    }
    const newId = insertInfo.insertedId.toString();
    const profile = await get(newId);
    return profile;
};
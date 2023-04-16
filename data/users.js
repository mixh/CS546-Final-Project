import { users } from "../config/mongoCollections.js";
import { ObjectId } from "mongodb";

import bcrypt  from "bcrypt";
import crypto from "crypto";
import validation from '../validation.js';
const saltRounds = 1;

export const create = async (
    name, email, password, age, gender, location, bio, preferences)=>{
        
        name = validation.checkString(name, "Name");
        email = validation.checkEmail(email, "Email");
        password = validation.checkPassword(password, "Password");
        age = validation.checkAge(age, "Age");
        location = validation.checkString(location, "Location");
        bio = validation.checkString(bio, "Bio");

        const encryptedPassword = await bcrypt.hash(password, saltRounds);

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
        throw "Could not add user";
    }
    const newId = insertInfo.insertedId.toString();
    const newUser = await get(newId);
    return newUser;
    }

export const get = async (id) =>{
    id = validation.checkId(id);
    const userCollection = await users();
    const u = await userCollection.findOne({_id: new ObjectId(id)});
    if(u== null) throw "no such user found";
    u._id = u._id.toString();
    return u;
}

export const loginAuth = async(email, password)=>{
    email = validation.checkEmail(email, "Email");
    password = validation.checkPassword(password, "Password");
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
    const insertInfo = await userCollection.insertOne(userProfile);
    if (!insertInfo.acknowledged || !insertInfo.insertedId) {
        throw "Could not create profile";
    }
    const newId = insertInfo.insertedId.toString();
    const profile = await get(newId);
    return profile;
}

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
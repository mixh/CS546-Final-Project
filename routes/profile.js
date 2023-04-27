//routes for user profile view and edit ONLY 
import multer from "multer";
import path from "path";
const storage = multer.diskStorage({
   destination: function (req, file, cb) {
     cb(null, "public/uploads/");
   },
   filename: function (req, file, cb) {
     const timestamp = new Date().getTime();
     const randomString = Math.random().toString(36).slice(2);
     const ext = path.extname(file.originalname);
     const filename = `${timestamp}-${randomString}${ext}`;
     cb(null, filename);
   },
 });
const upload = multer({ storage: storage });
const uploadImage = upload.single("image");

// TODO - DOTENV the API KEY I HAVE USED IT DIRECTLY RIGHT NOW 
import * as dotenv from 'dotenv';
dotenv.config();

import axios from "axios";

import xss from "xss";
import fetch from "node-fetch";

import { Router } from "express";
const router = Router();
import { users } from "../config/mongoCollections.js";
import { userData } from "../data/index.js";
import validation from "../validation.js";
import { ObjectId } from "mongodb";

const checkSession = (req, res, next) => {
  if (!req.session.userId) {
    return res.redirect("/");
  }
  next();
};


router.route("/:id").get(checkSession,async(req,res)=>{
  try{
    const userId = req.params.id;
    const user = await userData.get(userId);
    res.render("profile/view", { user });
  }
  catch(error){
    res.status(500).render("error",{error:error});
  }
})


// TODO - 
        // 1. IF YOU CHANGE EDIT FORM MAKE SURE TO CHANGE THIS POST METHOD 
        // 2. CHANGE THE POST ROUTE TO ALLOW EDIT FOR PREFERENCE AND OTHER FIELDS
router.route("/:id/edit")
.get(checkSession, async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await userData.get(userId);
    res.render("profile/edit", { user });
  } catch (error) {
    res.status(500).render("error", { error: error });
  }
})
.post(checkSession,uploadImage,async(req,res)=>{
  
  try {
    const userId = req.params.id;
    const user = await userData.get(userId);
  
  const updateData = {
  image: {
    destination: user.image.destination,
    filename: user.image.filename,
    path: user.image.path,
  },
};

    if (req.file) {
      updateData.image.destination = req.file.destination;
      updateData.image.filename = req.file.filename;
      updateData.image.path = req.file.path;
    } 
  
    if (req.body.name) {
      validation.checkString(req.body.name,"Name");
      updateData.name = xss(req.body.name);
    }
  
    if (req.body.age) {
      validation.checkAge(req.body.age,"Age");
      updateData.age = req.body.age;
    }

    if (!updateData.location) {
      updateData.location = {};
    }

    if(req.body.zip_code){
      validation.checkString(req.body.zip_code);
      const zip = req.body.zip_code;
      
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
      
          updateData.city_name = city;
          updateData.location = {
           type: "Point",
           coordinates: [lon, lat],
         };
          updateData.zip = req.body.zip_code;
    }
  
    if (req.body.bio) {
      validation.checkString(req.body.bio,"Bio");
      updateData.bio = xss(req.body.bio);
    }

    if (req.body.colleges){
      updateData.university= req.body.colleges;
    }
    if (req.body.gender){
      updateData.gender= req.body.gender;
    }

    if (req.body.company){
      validation.checkString(req.body.company,"Work");
      updateData.work= xss(req.body.company);
    }
    
    if (req.body.places-dropdown){
      updateData.bucketlist= req.body.places-dropdown;
    }

    if (req.body.gyms-dropdown){
      updateData.gym= req.body.gyms-dropdown;
    }

    // console.log(userData);
  
    await userData.update(userId, updateData);
  
    res.redirect(`/profile/${userId}`);
    
  } catch (error) {
    res.status(500).render("error", { error: error });
  }
})

router.route("/:id/pause").
post(checkSession, async (req, res) => {
  try {
    const userId = req.params.id;
    console.log("UserId: "+userId);
    const userCollection = await users();
    const user = await userCollection.findOne({ _id: new ObjectId(userId) });
    console.log("User Pause Route: "+ JSON.stringify(user));
    const isPaused = user.isPaused || false; // if isPaused is not set, default to false
    console.log("isPaused: "+isPaused);
    const userInfo = await userCollection.updateOne(
      { _id: new ObjectId(userId) },
      { $set: { isPaused: !isPaused } }
    );
  res.redirect(`/profile/${userId}`);
  } catch (error) {
    res.status(500).render("error", { error: error });
  }
});

export default router;

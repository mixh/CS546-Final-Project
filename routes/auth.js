//routes for login, logout and signup ONLY

import validation from "../validation.js";
import { Router } from "express";
const router = Router();
import axios from "axios";
import { userData } from "../data/index.js";
import bcrypt from "bcrypt";
import xss from "xss";

import multer from "multer";
import path from "path";
import { users } from "../config/mongoCollections.js";
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

router.route("/").get(async (req, res) => {
  try {
    res.render("about", { title: "about" });
  } catch (error) {
    res.status(500).render("error", { error: error });
  }
});

router.route("/login")
.get(async (req, res) => {
  try {
    res.render("auth/login", { title: "login" });
  } catch (error) {
    res.status(500).render("error", { error: error });
  }
})
.post(async (req, res) => {
   let userInfo = req.body;
    if (!userInfo || Object.keys(userInfo).length === 0) {
      return res
        .status(400)
        .render("error", { error: "There are no fields in the request body" });
    }
    
    try {
      let email = xss(req.body.email);
      let password = xss(req.body.password);
      email = validation.checkEmail(email, "Email");
      password = validation.checkPassword(password, "Password");
      let loginAuth = await userData.loginAuth(email, password);
    
      //sessions
      req.session.userId = loginAuth._id;
      
      res.redirect("/home/" + loginAuth._id);
    } catch (error) {
      res.status(400).render("error", { error: error });
      console.log(error);
    }
  });

  // TODO -
          // 1. CHANGE THIS REGISTRATION FORM IF YOU TAKE MORE INPUTS FROM THE USER IN THE SIGNUP PAGE
          //     MAKE SURE THE FIELDS MATCH THE DB FUNCTION FIELDS
          // 2.  USE XSS FOR ALL XSS INPUTS 
router
  .route("/register")
  .get(async (req, res) => {
    try {
      res.render("auth/register", { title: "register" });
    } catch (error) {
      res.status(500).render("error", { error: error });
    }
  })

  .post(uploadImage, async (req, res) => {
        const regData = req.body;
    if (!regData || Object.keys(regData).length === 0) {
      return res
        .status(400)
        .json({ error: "There are no fields in the request body" });
    }
    
    try {
      regData.name = validation.checkString(regData.name, "Name");
      regData.company = validation.checkString(regData.company, "Work");
      regData.email = validation.checkEmail(regData.email, "Email");
      regData.password = validation.checkPassword(regData.password, "Password");
      regData.confpassword = validation.checkPassword(regData.confpassword, "Confirm Password");
      regData.age = validation.checkAge(regData.age, "Age");
      regData.zip_code = validation.checkZip(regData.zip_code, "Zip Code");
      regData.bio = validation.checkString(regData.bio, "Bio");
      regData.place = validation.checkString(regData.place, "Place");
    } catch (error) {
      return res.status(400).render("error", { error: error });
    }

    try {

      // const { name, email, password, age, gender, bio, preferences } = req.body;
      const name = xss(req.body.name);
      const email = xss(req.body.email);
      const password = xss(req.body.password);
      const confpassword= xss(req.body.confpassword);
      const bio = xss(req.body.bio);
      const zip_code = req.body.zip_code;
      const age = req.body.age;
      const gender = req.body.gender;
      const university= req.body.colleges;
      const place= req.body.place;
      const gym= req.body.gym;
      const company = xss(req.body.company);

      if(password!==confpassword){
        throw "please enter the same password"
      }
      
      const im = req.file;
      // const im = req.body.file;
      if (!im) {
        throw "no image input found";
      }

      const image_destination = im.destination;
      const image_filename = im.filename;
      const image_path = im.path;
    
      const newUser = await userData.create(
        name,
        email,
        password,
        age,
        gender,
        zip_code,
        bio,
        image_destination,
        image_filename,
        image_path,
        university,
        company.toLowerCase(),
        gym,
        place);

      // console.log(im);

      res.redirect("/login");
    } catch (error) {
      console.log(error);
      res.status(404).render("error", { error: error.message });
    }
  });

router.route("/logout").get(async (req, res) => {
    try {
      req.session.destroy();
      res.redirect("/");
    } catch (e) {
      res.status(400).render("error", { error: error });
    }
  });

  const checkSession = (req, res, next) => {
    if (!req.session.userId) {
      return res.redirect("/");
    }
    next();
  };
  
  router.route("/validateUser").post(async (req, res) => {
    const regData = req.body;
    console.log("Reg Data: "+ JSON.stringify(regData));
    if (!regData || Object.keys(regData).length === 0) {
      return res
      .status(400)
      .json({ error: "There are no fields in the request body" });
  }

  try{
    regData.email = validation.checkEmail(regData.email, "Email");
  }catch(error){
    return res.status(400).send({ error: error });
  }

  try {
    const userCollection = await users();
    const email = xss(req.body.email);
    const user = await userCollection.findOne({email: email});
    console.log("User: "+user);

    if(user){
      res.status(200).send({exists: true});
    }else{
       res.status(200).send({exists: false});
    }

  } catch (error) {
    res.status(500).send({ error: error.message });
  }
  });

  export default router;
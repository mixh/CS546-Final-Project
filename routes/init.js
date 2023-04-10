import { Router } from "express";
const router = Router();
import axios from "axios";
import {userData} from "../data/index.js"
import { users } from "../config/mongoCollections.js";
import validation from '../validation.js';


router.route('/').get(async(req,res)=>{
    try{
        res.render('about',{title : "about"})
    } catch(error){
        res.status(500).render({error:error})
    }
})

router.route('/login')
.get(async(req,res)=>{
    try {
        res.render('login',{title:"login"})
    } catch (error) {
        res.status(500).render({error:error})
    }
})
.post(async(req,res)=>{
  let userInfo = req.body;
    if (!userInfo || Object.keys(userInfo).length === 0) {
      return res
        .status(400)
        .json({error: 'There are no fields in the request body'});
    }
  
  try {
    let email = req.body.email;
    let password = req.body.password;
    email = validation.checkEmail(email, 'Email');
    password = validation.checkPassword(password, 'Password');
    let loginAuth = await userData.loginAuth(email, password);

    //sessions
    req.session.userId = loginAuth._id;
    
    res.redirect('/home');
    
  } catch (error) {
    res.status(400).json({error : error });
    console.log(error);
  }
})

router.route("/registration")
.get(async (req, res) => {
  try {
    res.render("registration", { title: "registration" });
  } catch (error) {
    res.status(500).render({ error: error });
  }
})
.post(async (req, res) => {
  // need to validate all the following inputs @Sarthak15997
  const regData = req.body;
    if (!regData || Object.keys(regData).length === 0) {
      return res
        .status(400)
        .json({error: 'There are no fields in the request body'});
    }
  
  try{
    regData.name = validation.checkString(regData.name, 'Name');
    regData.email = validation.checkEmail(regData.email, 'Email');
    regData.password = validation.checkPassword(regData.password, 'Password');
    regData.age = validation.checkAge(regData.age, 'Age');
    regData.location = validation.checkString(regData.location, 'Location');
    regData.bio = validation.checkString(regData.bio, 'Bio');
  }catch(error){
    return res.status(400).json({error: error});
  }

  try {
    const { name, email, password, age, gender, location, bio, preferences } = req.body;
    const newUser = await userData.create(
      name,
      email,
      password,
      age,
      gender,
      location,
      bio,
      preferences
    );
    res.redirect('/login')
  } catch (error) {
    res.status(400).json({ error: error });
    console.log(error)
  }
});

router.route('/logout')
.get(async(req,res)=>{
  try{
    req.session.destroy();
    res.redirect("/");
  } catch(e) {
    res.status(400).render({error : error})
  }
})

const checkSession = (req, res, next) => {
  if (!req.session.userId) {
    return res.redirect("/");
  }
  next();
};

router.route("/home")
.get(checkSession, async (req, res) => {
  try {
    const userId = req.session.userId;
    const user = await userData.get(userId);
    res.render("home", { user,  title: "Homepage"});
  } catch (error) {
    res.status(500).render({ error: error });
  }
});

// router.route("/profile")
// .get(checkSession, async (req, res) => {
//   try {
//     // const userId = req.session.userId;
//     // const user = await userData.get(userId);
//     res.render("profile", {title: "Profile" });
//   } catch (error) {
//     res.status(500).render({ error: error });
//   }
// })
// .post(async (req, res) => {
  
//   const { profname, profemail, profgender, profage, proflocation, interests, profbio} = req.body;
  
//     try {
//       const profile = await userData.addProfile(
//         profname, 
//         profemail, 
//         profgender, 
//         profage, 
//         proflocation, 
//         interests, 
//         profbio
//       );
//       res.redirect('/home');
//     } catch (error) {
//       res.status(400).json({ error: error });
//       console.log(error);
//     }
//   });

export default router;
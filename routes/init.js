import { Router } from "express";
const router = Router();
import axios from "axios";
import {userData} from "../data/index.js"
import { users } from "../config/mongoCollections.js";


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
  try {

    let email = req.body.email;
    let password = req.body.password;
    let loginAuth = await userData.loginAuth(email, password);
    console.log(loginAuth);

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

const { name, email, password, age, gender, location, bio, preferences } = req.body;

  try {
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

router.route("/home").get(checkSession, async (req, res) => {
  try {
    const userId = req.session.userId;
    const user = await userData.get(userId);
    res.render("home", { user });
  } catch (error) {
    res.status(500).render({ error: error });
  }
});

export default router;
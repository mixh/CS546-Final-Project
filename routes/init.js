import { Router } from "express";
const router = Router();
import axios from "axios";


router.route('/').get(async(req,res)=>{
    try{
        res.render('homepage',{title : "homepage"})
    } catch(error){
        res.status(500).render({error:error})
    }
})

router.route('/login').get(async(req,res)=>{
    try {
        res.render('login',{title:"login"})
    } catch (error) {
        res.status(500).render({error:error})
    }
})

router.route("/registration").get(async (req, res) => {
  try {
    res.render("registration", { title: "registration" });
  } catch (error) {
    res.status(500).render({ error: error });
  }
});

export default router;
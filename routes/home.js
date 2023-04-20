//main page routing
import { Router } from "express";
const router = Router();
import axios from "axios";
import { userData } from "../data/index.js";
import { users } from "../config/mongoCollections.js";
import validation from "../validation.js";

const checkSession = (req, res, next) => {
  if (!req.session.userId) {
    return res.redirect("/");
  }
  next();
};


router.route("/:id").get(checkSession, async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await userData.get(userId);
    res.render("home/homepage", { user, title: "Homepage" });
  } catch (error) {
    res.status(500).render("error", { error: error });
  }
});

export default router;
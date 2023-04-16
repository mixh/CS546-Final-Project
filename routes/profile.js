import { Router } from "express";
const router = Router();
import axios from "axios";
import { userData } from "../data/index.js";
import { users } from "../config/mongoCollections.js";
import validation from "../validation.js";

router.route("/:id").get(async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await userData.get(userId);
    res.render("profile", { user, title: "Profile" });
  } catch (error) {
    res.status(500).render("error", { error: error });
  }
});

export default router;

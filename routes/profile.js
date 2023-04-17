import { Router } from "express";
const router = Router();
import axios from "axios";
import { userData } from "../data/index.js";
import { users } from "../config/mongoCollections.js";
import validation from "../validation.js";
import { ObjectId } from "mongodb";

router
  .route("/:id")
  .get(async (req, res) => {
    try {
      const userId = req.session.userId;
      const userObjectId = new ObjectId(userId);
      const userCollection = await users();
      const userById = await userCollection.findOne({ _id: new ObjectId(req.session.userId)});
      const profData =await userData.get(userId);
      
      const profId = profData._id;
      const profName = profData.name;
      const profEmail = profData.email;
      const profGender = profData.gender;
      const profAge = Number(profData.age);
      const profLocation = profData.location;
      const profBio = profData.bio;
      const profInterests = profData.interests? profData.interests : '';
      const profImgDest = profData.image.destination;
      const profImgName = profData.image.filename;

      res.render("profile", {
        title: "Profile",
        profName,
        profEmail,
        profGender,
        profAge,
        profLocation,
        profBio,
        profInterests,
        profId,
        profImgDest,
        profImgName
      });
    } catch (error) {
      res.status(500).render({ error: error });
    }
});

router.route("/:id").put(async (req, res) => {
  const updatedData = req.body;
  if (!updatedData || Object.keys(updatedData).length === 0) {
    return res
      .status(400)
      .json({ error: "There are no fields in the request body" });
  }
  try {
    req.params.id = validation.checkId(req.params.id, "ID url param");
    updatedData.profname = validation.checkString(updatedData.profname, "Name");
    updatedData.profemail = validation.checkEmail(updatedData.profemail,"Email");
    updatedData.age = validation.checkAge(updatedData.age, "Age");
    updatedData.proflocation = validation.checkString(updatedData.proflocation, "Location");
    updatedData.profinterests = validation.checkString(updatedData.profinterests,"Interests");
    updatedData.profbio = validation.checkString(
      updatedData.profbio,
      "Biography"
    );
  } catch (e) {
    return res.status(400).json({ error: e });
  }
  
  try {
    const updatedProfile = await userData.updateProfile(
      req.params.id,
      updatedData
    );
    res.render("profile",{
      title: "Profile",
      profName: updatedProfile.name,
      profEmail: updatedProfile.email,
      profGender: updatedProfile.gender,
      profAge: updatedProfile.age,
      profLocation: updatedProfile.location,
      profBio: updatedProfile.bio,
      profId: updatedProfile._id,
      profInterests: updatedProfile.interests,
      profImgDest: updatedProfile.image.destination,
      profImgName: updatedProfile.image.filename
    });
  } catch (e) {
    res.status(500).render("error", { error: error });
  }
});

export default router;

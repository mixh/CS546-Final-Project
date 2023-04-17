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

//route is a temporary placeholder 
//specific route is not decided yet

router.route("/persondetails/:id").get(async (req, res) => {

  try {
    if(!req.params.id || !req.params.id.trim()) throw "Please enter a valid ID"
    if(!Number(req.params.id)) throw "Input is not a number";
    const id= req.params.id;
    const currentUser = await userCollection.findOne({ _id: id });
    let userLikedBy = currentUser.likedBy;

    if (userLikedBy){
      for (let i in userLikedBy) {
        let userShow = await userCollection.findOne({ _id: i });
        //display this one user
        return res.render('./home', {name: userShow.name, age: userShow.age, gender:userShow.gender, bio:userShow.bio, university:userShow.university, work:userShow.work, gym:userShow.gym, bucketlist: userShow.bucketlist});
        //remove this one user from likedBy of the current user
        const result = await userCollection.updateOne(
          { _id: new ObjectID(id) },
          { $pull: { likedBy: new ObjectID(i) } }
        );
      }
    }
    else{
      let arrayOfSim= getPeople(id)
      for (let i in arrayOfSim){
        let userShow = await userCollection.findOne({ _id: i });
        //display this one user
        return res.render('./home', {name: userShow.name, age: userShow.age, gender:userShow.gender, bio:userShow.bio, university:userShow.university, work:userShow.work, gym:userShow.gym, bucketlist: userShow.bucketlist});
      }
    }
  }catch(e) {
    if(e == "Input is not a number") return res.status(400).render('./error', {error: e});
    return res.render('./personNotFound', {title: "People Not Found", input: req.params.id});
  }
  
});

export default router;

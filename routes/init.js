import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

import { Router } from "express";
const router = Router();
import axios from "axios";
import { userData } from "../data/index.js";
import { users } from "../config/mongoCollections.js";
import validation from "../validation.js";
<<<<<<< HEAD
import { ObjectId } from "mongodb";

router.route("/").get(async (req, res) => {
  try {
    res.render("about", { title: "about" });
  } catch (error) {
    res.status(500).render({ error: error });
  }
});

=======

router.route("/").get(async (req, res) => {
  try {
    res.render("about", { title: "about" });
  } catch (error) {
    res.status(500).render("error", { error: error });
  }
});

>>>>>>> d95721df68662affc6bdab0fe395000f4c90362c
router
  .route("/login")
  .get(async (req, res) => {
    try {
      res.render("login", { title: "login" });
    } catch (error) {
<<<<<<< HEAD
      res.status(500).render({ error: error });
=======
      res.status(500).render("error", { error: error });
>>>>>>> d95721df68662affc6bdab0fe395000f4c90362c
    }
  })
  .post(async (req, res) => {
    let userInfo = req.body;
    if (!userInfo || Object.keys(userInfo).length === 0) {
      return res
        .status(400)
<<<<<<< HEAD
        .json({ error: "There are no fields in the request body" });
    }

    try {
      let email = req.body.email;
      let password = req.body.password;
      email = validation.checkEmail(email, "Email");
      password = validation.checkPassword(password, "Password");
      let loginAuth = await userData.loginAuth(email, password);

      //sessions
      req.session.userId = loginAuth._id;
      let profileId = loginAuth._id;
      res.cookie("profileId", profileId);
      res.redirect("/home");
    } catch (error) {
      res.status(400).json({ error: error });
=======
        .render("error", { error: "There are no fields in the request body" });
    }

    try {
      let email = req.body.email;
      let password = req.body.password;
      email = validation.checkEmail(email, "Email");
      password = validation.checkPassword(password, "Password");
      let loginAuth = await userData.loginAuth(email, password);

      //sessions
      req.session.userId = loginAuth._id;

      res.redirect("/home?id=" + loginAuth._id);
    } catch (error) {
      res.status(400).render("error", { error: error });
>>>>>>> d95721df68662affc6bdab0fe395000f4c90362c
      console.log(error);
    }
  });

<<<<<<< HEAD
=======
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

>>>>>>> d95721df68662affc6bdab0fe395000f4c90362c
router
  .route("/registration")
  .get(async (req, res) => {
    try {
      res.render("registration", { title: "registration" });
    } catch (error) {
<<<<<<< HEAD
      res.status(500).render({ error: error });
    }
  })
  .post(async (req, res) => {
=======
      res.status(500).render("error", { error: error });
    }
  })
  .post(uploadImage, async (req, res) => {
>>>>>>> d95721df68662affc6bdab0fe395000f4c90362c
    // need to validate all the following inputs @Sarthak15997
    const regData = req.body;
    if (!regData || Object.keys(regData).length === 0) {
      return res
        .status(400)
        .json({ error: "There are no fields in the request body" });
    }

    try {
      regData.name = validation.checkString(regData.name, "Name");
      regData.email = validation.checkEmail(regData.email, "Email");
      regData.password = validation.checkPassword(regData.password, "Password");
      regData.age = validation.checkAge(regData.age, "Age");
<<<<<<< HEAD
      regData.location = validation.checkString(regData.location, "Location");
      regData.bio = validation.checkString(regData.bio, "Bio");
    } catch (error) {
      return res.status(400).json({ error: error });
    }

    try {
      const { name, email, password, age, gender, location, bio, preferences } =
        req.body;
=======
      // regData.location = validation.checkString(regData.location, 'Location');
      regData.zip_code = validation.checkZip(regData.zip_code, "Zip Code");
      regData.bio = validation.checkString(regData.bio, "Bio");
    } catch (error) {
      return res.status(400).render("error", { error: error });
    }

    try {
      const API_KEY = process.env.API_KEY;
      const ZIP = regData.zip_code;
      const COUNTRY = "US";
      const endPoint = `http://api.openweathermap.org/geo/1.0/zip?zip=${ZIP},${COUNTRY}&appid=${API_KEY}`;

      const response = await axios.get(endPoint);

      if (response.status !== 200) {
        throw "Invalid zip code";
      }

      let latitude = response.data.lat;
      let longitude = response.data.lon;
      let city = response.data.name;

      if (!latitude || !longitude || !city) {
        throw "recheck your zip code : we couldnt find the zip code in US";
      }

      const { name, email, password, age, gender, bio, preferences } = req.body;
      const im = req.file;

      if (!im) {
        throw "no image input found";
      }

      const image_destination = im.destination;
      const image_filename = im.filename;
      const image_path = im.path;

>>>>>>> d95721df68662affc6bdab0fe395000f4c90362c
      const newUser = await userData.create(
        name,
        email,
        password,
        age,
        gender,
<<<<<<< HEAD
        location,
        bio,
        preferences
      );
      res.redirect("/login");
    } catch (error) {
      res.status(400).json({ error: error });
      console.log(error);
=======
        longitude,
        latitude,
        city,
        bio,
        preferences,
        image_destination,
        image_filename,
        image_path
      );

      console.log(im);

      res.redirect("/login");
    } catch (error) {
      if (axios.isAxiosError(error) && error.response.status === 404) {
        return res.status(400).render("error", { error: "Invalid ZIP code" });
      }

      console.log(error);
      res.status(404).render("error", { error: error });
>>>>>>> d95721df68662affc6bdab0fe395000f4c90362c
    }
  });

router.route("/logout").get(async (req, res) => {
  try {
    req.session.destroy();
    res.redirect("/");
  } catch (e) {
<<<<<<< HEAD
    res.status(400).render({ error: error });
=======
    res.status(400).render("error", { error: error });
>>>>>>> d95721df68662affc6bdab0fe395000f4c90362c
  }
});

const checkSession = (req, res, next) => {
  if (!req.session.userId) {
    return res.redirect("/");
  }
  next();
};

router.route("/home").get(checkSession, async (req, res) => {
  try {
    const userId = req.query.id;
    const user = await userData.get(userId);
    res.render("home", { user, title: "Homepage" });
  } catch (error) {
    res.status(500).render("error", { error: error });
  }
});

<<<<<<< HEAD
router
  .route("/profile")
  .get(checkSession, async (req, res) => {
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
      });
    } catch (error) {
      res.status(500).render({ error: error });
    }
  });

router.route("/profile/:id").put(async (req, res) => {
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
      profInterests: updatedProfile.interests
    });
  } catch (e) {
    res.status(500).json({ error: e });
  }
});

export default router;
=======

export default router;
>>>>>>> d95721df68662affc6bdab0fe395000f4c90362c

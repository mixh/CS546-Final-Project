//import and export all

import initRoutes from "./init.js";
import profileRoutes from "./profile.js"

const constructorMethods = (app) => {
  app.use("/", initRoutes);
  app.use("/profile", profileRoutes);
  app.use("*", (req, res) => {
    res.redirect("/");
  });
};

export default constructorMethods;
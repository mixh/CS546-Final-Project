//import and export all

import initRoutes from "./init.js";
import profileRoutes from "./profile.js"
import matchesRoutes from "./matches.js";

const constructorMethods = (app) => {
  app.use("/", initRoutes);
  app.use("/profile", profileRoutes);
  app.use("/matches", matchesRoutes);
  app.use("*", (req, res) => {
    res.redirect("/");
  });
};

export default constructorMethods;
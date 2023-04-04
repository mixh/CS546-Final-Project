//import and export all

import initRoutes from "./init.js";

const constructorMethods = (app) => {
  app.use("/", initRoutes);
  app.use("*", (req, res) => {
    res.redirect("/");
  });
};

export default constructorMethods;
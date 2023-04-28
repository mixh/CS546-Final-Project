import authRoutes from "./auth.js";
import homeRoutes from "./home.js";
import profileRoutes from "./profile.js";
import potentialMatchesRoutes from "./potentialMatches.js"
import potentialMatchesProfileRoutes from "./potentialMatchesProfile.js"
import matchesRoutes from "./matches.js"
import messageRoutes from "./messages.js"

const constructorMethods = (app) => {
  app.use("/", authRoutes);
  app.use("/home",homeRoutes);
  app.use("/profile", profileRoutes);
  app.use("/potentialMatches",potentialMatchesRoutes);
  app.use("/potentialMatchesProfile", potentialMatchesProfileRoutes);
  app.use("/matches", matchesRoutes);
  app.use("/messages",messageRoutes);

  app.use("*", (req, res) => {
    res.redirect("/");
  });
};

export default constructorMethods;

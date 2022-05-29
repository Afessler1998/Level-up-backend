const express = require("express");
const dotenv = require("dotenv");
const passport = require("passport");
const connectDb = require("../config/ConnectDb");
const authenticateUser = require("../src/helpers/middlewares/authenticateUser");
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const workoutsRoutes = require("./routes/workouts");
const templatesRoutes = require("./routes/templates");
const statsRoutes = require("./routes/stats");
const mongoose = require("mongoose");
const sendEmail = require("./utils/sendEmail");

dotenv.config({ path: "./config/config.env" });

connectDb();

const app = express();
app.use(express.json());

require("../config/googleOAuth");
require("../config/facebookOAuth");
app.use(passport.initialize());

app.use("/auth", authRoutes);
app.use("/users", authenticateUser, userRoutes);
app.use("/workouts", authenticateUser, workoutsRoutes);
app.use("/templates", authenticateUser, templatesRoutes);
app.use("/stats", authenticateUser, statsRoutes);

const server = app.listen(process.env.PORT);

process.on("uncaughtException", async (error) => {
  const { SYS_ADMIN_EMAIL } = process.env;
  const subject = "Critical Error in Level Up Backend";
  const text = `${error.stack}`;
  await sendEmail(SYS_ADMIN_EMAIL, subject, text);
  server.close(() => {
    mongoose.connection.close(false, () => {
      process.exit(0);
    });
  });
});

const router = require("express").Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");
const {
  signUpEmail,
  signInEmail,
  getPasswordResetCode,
  resetPassword
} = require("../controllers/auth/index");
const expressCallback = require("../helpers/expressCallback");

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile"]
  })
);

router.get(
  "/google/callback",
  passport.authenticate("google", { session: false }),
  (req, res) => {
    const { id } = req.user;
    const token = jwt.sign({ id }, process.env.JWT_SECRET);
    res.redirect(`${process.env.CLIENT_URI}?token=${token}`);
  }
);

router.get("/facebook", passport.authenticate("facebook"));

router.get(
  "/facebook/callback",
  passport.authenticate("facebook", { session: false }),
  (req, res) => {
    const { id } = req.user;
    const token = jwt.sign({ id }, process.env.JWT_SECRET);
    res.redirect(`${process.env.CLIENT_URI}?token=${token}`);
  }
);

router.post("/signUp", expressCallback(signUpEmail));

router.post("/signIn", expressCallback(signInEmail));

router.post("/resetCode", expressCallback(getPasswordResetCode));

router.post("/resetPassword", expressCallback(resetPassword));

module.exports = router;

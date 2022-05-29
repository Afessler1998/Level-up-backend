const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const { upsertSocialsUser } = require("../src/services/user-services/index");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const user = await upsertSocialsUser(profile._json.sub);
        done(null, user);
      } catch (error) {
        throw new Error(error);
      }
    }
  )
);

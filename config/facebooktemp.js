const passport = require("passport");
const FacebookStrategy = require("passport-facebook").Strategy;
const { upsertSocialsUser } = require("../src/services/user-services/index");

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      callbackURL: process.env.FACEBOOK_CALLBACK_URL
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const user = await upsertSocialsUser(profile.id);
        done(null, user);
      } catch (error) {
        throw new Error(error);
      }
    }
  )
);

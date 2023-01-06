const passport = require("passport");
require("dotenv").config();
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const User = require("../models/Users");

// Use the GoogleStrategy within Passport.
// Strategies in Passport require a `verify` function, which accept
// credentials (in this case, an accessToken, refreshToken, and Google
// profile), and invoke a callback with a user object.

passport.use(
  "google",
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3001/auth/google",
    },
    async function (accessToken, refreshToken, profile, done) {
      console.log(profile)
      const user = await User.findOne({ email: profile.emails[0].value });
      if (user) {
        done(null, user);
      } else {
        const newUser = new User();
        newUser.email = profile.emails[0].value;
        newUser.password = newUser.encryptPassword(profile._json.sub);
        await newUser.save();
        done(null, newUser);
      }
    }
  )
);

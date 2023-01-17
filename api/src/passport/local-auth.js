const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/Users");
const { v4: uuidv4 } = require("uuid");
const { getToken, getTokenData } = require("../config/jwt.config");
const { getTemplate, sendEmail } = require("../config/mail.config");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});

passport.use(
  "local-signup",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true,
    },
    async (req, email, password, done) => {
      const user = await User.findOne({ email: email });
      if (user) {
        return done(null, false, console.log("The email is already taken."));
      } else {
        // Generar el código
        const code = uuidv4();

        const newUser = new User();
        newUser.email = email;
        newUser.code = code;
        newUser.password = newUser.encryptPassword(password);

        // Generar token
        const token = getToken({ email, code });

        // Obtener un template
        const template = getTemplate(email, token);

        // Enviar el email
        await sendEmail(email, "Confirmar Tu Cuenta", template);
        await newUser.save();
        done(null, newUser);
      }
    }
  )
);

// passport.use(
//   "local-signin",
//   new LocalStrategy(
//     {
//       usernameField: "email",
//       passwordField: "password",
//       passReqToCallback: true,
//     },
//     async (req, email, password, done) => {
//       const user = await User.findOne({ email: email });
//       if (!user) {
//         return done(null, false, console.log("No user found."));
//       }
//       if (!user.comparePassword(password)) {
//         return done(null, false, console.log("Incorrect password."));
//       }
//       done(null, user);
//     }
//   )
// );

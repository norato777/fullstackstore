const { Router } = require("express");
const router = Router();
const passport = require("passport");

router.post(
  "/",
  passport.authenticate("local-signup", {
    successRedirect: "/users",
    failureRedirect: "/signup",
    passReqToCallback: false,
  })
);

router.get("/", (req, res) => {
  const { email } = req.body;
  !email
    ? res.status(200).json({ message: "Usuario ya existe" })
    : res.status(200).json({ message: "Usuario creado correctamente" });
});

module.exports = router;

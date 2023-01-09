const { Router } = require("express");
const router = Router();
const passport = require("passport");

router.post(
  "/",
  passport.authenticate("local-signin", {
    successRedirect: "/users",
    failureRedirect: "/signin",
    passReqToCallback: true,
  })
);

router.get("/", (req, res) => {
  const { email } = req.body;
  try {
    !email
    ? res.status(200).json({ message: "Usuario iniciado correctamente" })
    : res.status(400).json({ message: "Usuario incorrecto" });
  } catch (error) {
    res.status(400).json({ message: "Usuario incorrecto" });
  }

});

module.exports = router;

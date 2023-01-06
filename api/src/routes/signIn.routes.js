const { Router } = require("express");
const router = Router();
const passport = require("passport");

router.post(
  "/",
  passport.authenticate("local-signin", {
    successRedirect: "/",
    failureRedirect: "/signin",
    passReqToCallback: true,
  })
);

module.exports = router;

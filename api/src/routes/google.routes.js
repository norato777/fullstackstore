const { Router } = require("express");
const passport = require("passport");
require("../middleware/google.js");
const router = Router();

router.get(
  "/google",
  passport.authenticate("google", {
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
    ],
  })
);

router.get("/google", (req, res) => {
  if (req.user) {
    res.status(200).json({ user: req.user });
  }
});

// router.get(
//   "/google/callback",
//   passport.authenticate("google", {
//     successRedirect: "http://localhost:3001",
//     failureRedirect: "/login/failed",
//   })
// );

// router.get("/login/failed", (req, res) => {
//   res.status(400).json({
//     successRedirect: false,
//     message: "failure",
//   });
// });

module.exports = router;

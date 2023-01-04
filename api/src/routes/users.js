const express = require("express");
const router = express.Router();
const userSchema = require("../models/Users.js");

//create user

router.post("/users", (req, res) => {
  const user = userSchema(req.body);
  user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ mesagge: error.message }));
});

//get all users
router.get("/users", (req, res) => {
  userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ mesagge: error}));
});

//get user by id

router.get("/users/:id", (req, res) => {
  const { id } = req.params;
  userSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ mesagge: error }));
});

// update user
router.put("/users/:id", (req, res) =>{
    const { id } = req.params;
    userSchema.findByIdAndUpdate(id, req.body   )
     .then((data) => res.json(data))
     .catch((error) => res.json({ mesagge: error}))
     
})


//delete user by id
router.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  userSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ mesagge: error }));
});
module.exports = router;

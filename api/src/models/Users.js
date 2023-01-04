const mongoose = require("mongoose")
const { Schema } = mongoose


const UserSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    direccion: {
      type: Array,
    },
    password: {
      type: String,
      required: true
    },
    cart:{
        type: Array
    },
    admin: {
      type: Boolean
    },
    favoritos: {
      type: Array,
    }
  });
  const UserModel = mongoose.model("User", UserSchema);

  module.exports = UserModel
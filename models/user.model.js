
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "username is required"],
      unique: true,
      trim: true,
      minLength: 2,
      maxLength: 30,
    },
    email: {
      type: String,
      required: [true, "user email is required"],
      unique: true,
      trim: true,
      lowercase: true,
      match: [/\S+@\S+\.\S+/, "l'email n'est pas valide"],
    },
    password: {
      type: String,
      required: [true, "user password is required"],
      minLength: 6,
    },
  },
  { timestamps: true }  // donne des infos sur la creation et la modification.
);

const User = mongoose.model('user' , userSchema);

export default User;



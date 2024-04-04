import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    unique: true,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  onboarded: {
    type: Boolean,
    default: false,
  },
  piggyBanks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "PiggyBank"
    }
  ]
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
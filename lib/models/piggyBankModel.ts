import mongoose from "mongoose";

const piggyBankSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  authorId: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  amountMoney: {
    type: Number,
    default: 0,
  },
});

const PiggyBank = mongoose.models.PiggyBank || mongoose.model("PiggyBank", piggyBankSchema);

export default PiggyBank;
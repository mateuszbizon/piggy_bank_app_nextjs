import mongoose from "mongoose";

const piggyBankSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  authorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
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
  payments: [
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Payment"
    },
  ],
  people: [
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "PiggyBankPerson"
    },
  ],
});

const PiggyBank = mongoose.models.PiggyBank || mongoose.model("PiggyBank", piggyBankSchema);

export default PiggyBank;
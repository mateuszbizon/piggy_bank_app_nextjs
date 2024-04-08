import mongoose from "mongoose";

const piggyBankPersonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  piggyBankId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  amountMoney: {
    type: Number,
    default: 0,
  },
});

const PiggyBankPerson = mongoose.models.PiggyBankPerson || mongoose.model("PiggyBankPerson", piggyBankPersonSchema);

export default PiggyBankPerson;
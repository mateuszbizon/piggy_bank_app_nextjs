import mongoose from "mongoose";

const piggyBankPersonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  piggyBankId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "PiggyBank",
    required: true,
  },
  payments: [
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Payment"
    }
  ],
});

const PiggyBankPerson = mongoose.models.PiggyBankPerson || mongoose.model("PiggyBankPerson", piggyBankPersonSchema);

export default PiggyBankPerson;
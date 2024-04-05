import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
  piggyBankId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "PiggyBank",
    required: true,
  },
  piggyBankPersonId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "PiggyBankPerson",
    required: true,
  },
  piggyBankPersonName: {
    type: String,
    required: true,
  },
  isPaymentAdded: {
    type: Boolean,
    default: false,
  },
  paymentValue: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Payment = mongoose.models.Payment || mongoose.model("Payment", paymentSchema);

export default Payment;
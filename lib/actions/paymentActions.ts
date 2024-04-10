"use server";

import { revalidatePath } from "next/cache";
import Payment from "../models/paymentModel";
import PiggyBank from "../models/piggyBankModel";
import { connectToDb } from "../mongoose";
import PiggyBankPerson from "../models/piggyBankPersonModel";

type CreatePaymentProps = {
    piggyBankId: string;
    piggyBankPersonId: string;
    piggyBankPersonName: string;
    paymentValue: number;
    path: string;
}

export async function createPayment({ piggyBankId, piggyBankPersonId, piggyBankPersonName, paymentValue, path }: CreatePaymentProps) {
    try {
        connectToDb();

        await Payment.create({
            piggyBankId,
            piggyBankPersonId,
            piggyBankPersonName,
            paymentValue,
        })

        await PiggyBank.findByIdAndUpdate(piggyBankId, {
            $inc: { amountMoney: paymentValue }
        }, { new: true })

        await PiggyBankPerson.findOneAndUpdate({ piggyBankId: piggyBankId, name: piggyBankPersonName }, {
            $inc: { amountMoney: paymentValue }
        }, { new: true })

        revalidatePath(path)

        return { message: "Dodano kwotę", success: true }
    } catch (error) {
        console.error(error);
        return { message: "Nie można dodać kwoty", success: false }
    }
}
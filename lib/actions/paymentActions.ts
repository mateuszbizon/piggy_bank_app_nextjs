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

type UndoPaymentProps = {
    paymentId: string;
    piggyBankId: string;
    piggyBankPersonId: string;
    path: string;
}

export async function undoPayment({ paymentId, piggyBankId, piggyBankPersonId, path }: UndoPaymentProps) {
    try {
        connectToDb();

        const updatedPayment = await Payment.findByIdAndUpdate(paymentId, {
            isPaymentAdded: false,  
        }, { new: true })

        await PiggyBank.findByIdAndUpdate(piggyBankId, {
            $inc: { amountMoney: -updatedPayment.paymentValue }
        }, { new: true })

        await PiggyBankPerson.findByIdAndUpdate(piggyBankPersonId, {
            $inc: { amountMoney: -updatedPayment.paymentValue }
        }, { new: true })

        revalidatePath(path)

        return { message: "Cofnięto kwotę", success: true }
    } catch (error) {
        console.error(error);
        return { message: "Nie można cofnąć kwoty", success: false }
    }
}

export async function redoPayment({ paymentId, piggyBankId, piggyBankPersonId, path }: UndoPaymentProps) {
    try {
        connectToDb();

        const updatedPayment = await Payment.findByIdAndUpdate(paymentId, {
            isPaymentAdded: true,  
        }, { new: true })

        await PiggyBank.findByIdAndUpdate(piggyBankId, {
            $inc: { amountMoney: updatedPayment.paymentValue }
        }, { new: true })

        await PiggyBankPerson.findByIdAndUpdate(piggyBankPersonId, {
            $inc: { amountMoney: updatedPayment.paymentValue }
        }, { new: true })

        revalidatePath(path)

        return { message: "Przywrócono kwotę", success: true }
    } catch (error) {
        console.error(error);
        return { message: "Nie można przywrócić kwoty", success: false }
    }
}
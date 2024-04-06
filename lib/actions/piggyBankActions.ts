"use server";

import { revalidatePath } from "next/cache";
import PiggyBank from "../models/piggyBankModel";
import User from "../models/userModel";
import { connectToDb } from "../mongoose";
import PiggyBankPerson from "../models/piggyBankPersonModel";
import Payment from "../models/paymentModel";

type CreatePiggyBankProps = {
	userId: string;
	name: string;
};

export async function createPiggyBank({ userId, name }: CreatePiggyBankProps) {
	try {
		connectToDb();

		const createdPiggyBank = await PiggyBank.create({
            name,
            authorId: userId,
        })

        await User.findByIdAndUpdate(userId, {
            $push: { piggyBanks: createdPiggyBank._id }
        })

        revalidatePath("/")

        return { message: "Utworzono skarbonkę", success: true }
	} catch (error) {
        console.error(error);
        return { message: "Nie można utworzyć skarbonki", success: false }
    }
}

export async function getPiggyBankById(piggyBankId: string) {
    try {
        connectToDb();

        const piggyBank = await PiggyBank.findById(piggyBankId).populate({
            path: "people",
            model: PiggyBankPerson
        }).populate({
            path: "payments",
            model: Payment
        })

        if (!piggyBank) {
            return { message: "Nie znaleziono tej skarbonki", success: false }
        }

        return { data: piggyBank, success: true }

    } catch (error) {
        console.error(error)
        return { message: "Nie można pobrać skarbonki", success: false }
    }
}
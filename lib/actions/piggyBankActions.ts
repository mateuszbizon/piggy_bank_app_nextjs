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

		await PiggyBank.create({
            name,
            authorId: userId,
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

        const piggyBank = await PiggyBank.findById(piggyBankId)

        if (!piggyBank) {
            return { message: "Nie znaleziono tej skarbonki", success: false }
        }

        const people = await PiggyBankPerson.find({ piggyBankId: piggyBankId })

        return { data: { piggyBank: piggyBank, people: people }, success: true }

    } catch (error) {
        console.error(error)
        return { message: "Nie można pobrać skarbonki", success: false }
    }
}
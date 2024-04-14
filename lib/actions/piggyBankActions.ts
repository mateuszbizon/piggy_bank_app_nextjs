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

        const existingPiggyBank = await PiggyBank.findOne({ authorId: userId, name: name.toLowerCase() })

        if (existingPiggyBank) {
            return { message: "Skarbonka już istnieje", success: false }
        }

		await PiggyBank.create({
            name: name.toLowerCase(),
            authorId: userId,
        })

        revalidatePath("/")

        return { message: "Utworzono skarbonkę", success: true }
	} catch (error) {
        console.error(error);
        return { message: "Nie można utworzyć skarbonki", success: false }
    }
}

type EditPiggyBankProps = {
    piggyBankId?: string;
    userId?: string;
    name: string;
    path: string;
}

export async function editPiggyBank({ piggyBankId, userId, name, path }: EditPiggyBankProps) {
    try {
        connectToDb();

        const existingPiggyBank = await PiggyBank.findOne({ authorId: userId, name: name.toLowerCase() })

        if (existingPiggyBank && existingPiggyBank._id.toString() !== piggyBankId) {
            return { message: "Skarbonka już istnieje", success: false }
        }

        await PiggyBank.findByIdAndUpdate(piggyBankId, {
            name: name.toLowerCase(),
        }, { new: true })

        revalidatePath(path);

        return { message: "Zedytowano skarbonkę", success: true }
    } catch (error) {
        console.error(error);
        return { message: "Nie można zedytować skarbonki", success: false }
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

        const payments = await Payment.find({ piggyBankId: piggyBankId })

        return { data: { piggyBank: piggyBank, people: people, payments: payments.reverse() }, success: true }

    } catch (error) {
        console.error(error)
        return { message: "Nie można pobrać skarbonki", success: false }
    }
}

export async function deletePiggyBank(piggyBankId?: string) {
    try {
        connectToDb();

        await PiggyBank.findByIdAndDelete(piggyBankId);

        revalidatePath("/")

        return { message: "Usunięto skarbonkę", success: true }
    } catch (error) {
        console.error(error);
        return { message: "Nie można usunąć skarbonki", success: false }
    }
}
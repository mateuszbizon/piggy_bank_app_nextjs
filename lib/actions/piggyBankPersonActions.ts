"use server"

import { revalidatePath } from "next/cache";
import PiggyBankPerson from "../models/piggyBankPersonModel";
import { connectToDb } from "../mongoose";
import PiggyBank from "../models/piggyBankModel";

type CreatePersonProps = {
    piggyBankId?: string;
    personName: string;
    path: string;
}

export async function createPerson({ piggyBankId, personName, path }: CreatePersonProps) {
    try {
        connectToDb();

        const existingPerson = await PiggyBankPerson.findOne({ piggyBankId: piggyBankId, name: personName.toLowerCase() })

        if (existingPerson) {
            return { message: "Osoba w tej skarbonce już istnieje", success: false }
        }

        await PiggyBankPerson.create({
            name: personName.toLowerCase(),
            piggyBankId,
        })

        revalidatePath(path)

        return { message: "Dodano osobę", success: true }
    } catch (error) {
        console.error(error)
        return { message: "Nie można utworzyć osoby", success: false }
    }
}

type DeletePersonProps = {
    piggyBankId: string;
    piggyBankPersonId: string;
    amountMoney: number;
    path: string;
}

export async function deletePerson({ piggyBankId, piggyBankPersonId, amountMoney, path }: DeletePersonProps) {
    try {
        connectToDb();

        await PiggyBankPerson.findByIdAndDelete(piggyBankPersonId)

        await PiggyBank.findByIdAndUpdate(piggyBankId, {
            $inc: { amountMoney: -amountMoney }
        })

        revalidatePath(path);

        return { message: "Usunięto osobę", success: true }
    } catch (error) {
        console.error(error);
        return { message: "Nie można usunąć osoby", success: false }
    }
}
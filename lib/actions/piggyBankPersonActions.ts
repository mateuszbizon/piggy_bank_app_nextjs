"use server"

import { revalidatePath } from "next/cache";
import PiggyBankPerson from "../models/piggyBankPersonModel";
import { connectToDb } from "../mongoose";

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
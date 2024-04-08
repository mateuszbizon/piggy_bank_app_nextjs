"use server"

import PiggyBank from "../models/piggyBankModel";
import PiggyBankPerson from "../models/piggyBankPersonModel";
import { connectToDb } from "../mongoose";

type CreatePersonProps = {
    piggyBankId?: string;
    personName: string;
}

export async function createPerson({ piggyBankId, personName }: CreatePersonProps) {
    try {
        connectToDb();

        const createdPerson = await PiggyBankPerson.create({
            name: personName,
            piggyBankId,
        })

        await PiggyBank.findByIdAndUpdate(piggyBankId, {
            $push: { people: createdPerson._id }
        })

        return { message: "Dodano osobę", success: true }
    } catch (error) {
        console.error(error)
        return { message: "Nie można utworzyć osoby", success: false }
    }
}
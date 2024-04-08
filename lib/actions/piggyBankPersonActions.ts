"use server"

import PiggyBankPerson from "../models/piggyBankPersonModel";
import { connectToDb } from "../mongoose";

type CreatePersonProps = {
    piggyBankId?: string;
    personName: string;
}

export async function createPerson({ piggyBankId, personName }: CreatePersonProps) {
    try {
        connectToDb();

        await PiggyBankPerson.create({
            name: personName,
            piggyBankId,
        })

        return { message: "Dodano osobę", success: true }
    } catch (error) {
        console.error(error)
        return { message: "Nie można utworzyć osoby", success: false }
    }
}
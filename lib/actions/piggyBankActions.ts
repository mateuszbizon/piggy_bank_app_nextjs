"use server";

import PiggyBank from "../models/piggyBankModel";
import { connectToDb } from "../mongoose";

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

        return { message: "Utworzono skarbonkę", success: true }
	} catch (error) {
        console.error(error);
        return { message: "Nie można utworzyć skarbonki", success: false }
    }
}

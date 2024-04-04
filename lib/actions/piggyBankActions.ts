"use server";

import PiggyBank from "../models/piggyBankModel";
import User from "../models/userModel";
import { connectToDb } from "../mongoose";

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

        return { message: "Utworzono skarbonkę", success: true }
	} catch (error) {
        console.error(error);
        return { message: "Nie można utworzyć skarbonki", success: false }
    }
}

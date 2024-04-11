"use server";

import { revalidatePath } from "next/cache";
import PiggyBank from "../models/piggyBankModel";
import User from "../models/userModel";
import { connectToDb } from "../mongoose";

export async function getUserById(userId: string) {
	try {
		connectToDb();

		const user = await User.findOne({ id: userId });

		if (!user) {
			return { message: "Nie znaleziono użytkownika", success: false }
		}

		return { data: user, success: true };
	} catch (error) {
		console.error(error);
		return { message: "Nie można wyszukać użytkownika", success: false };
	}
}

type UpdateUserProps = {
	userId: string;
	name: string;
	username: string;
	path: string;
};

export async function updateUser({ userId, name, username, path }: UpdateUserProps) {
	try {
		connectToDb();

		const existingUser = await User.findOne({ username: username });

		if (existingUser && existingUser.id !== userId) {
			return { message: "Nazwa użytkownika jest zajęta", success: false };
		}

		await User.findOneAndUpdate(
			{ id: userId },
			{ username: username.toLowerCase(), name, onboarded: true },
			{ upsert: true }
		);

		if (path === "/profile/edit") {
			revalidatePath(path)
		}

        return { message: "Dodano/zaktualizowano użytkownika", success: true }

	} catch (error) {
		console.error(error);
		return { message: "Nie można dodać/zaktualizować użytkownika", success: false };
	}
}

export async function getUserPiggyBanks(userId: string) {
	try {
		connectToDb();

		const piggyBanks = await PiggyBank.find({ authorId: userId })

		if (!piggyBanks) {
			return { message: "Nie znaleziono użytkownika", success: false }
		}

		return { data: piggyBanks, success: true }
	} catch (error) {
		console.error(error);
		return { message: "Nie można pobrać skarbonek", success: false }
	}
}

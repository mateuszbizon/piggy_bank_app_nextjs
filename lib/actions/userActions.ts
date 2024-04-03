"use server";

import User from "../models/userModel";
import { connectToDb } from "../mongoose";

export async function getUserById(userId: string) {
	try {
		connectToDb();

		const user = await User.findOne({ id: userId });

		return { data: user, success: true };
	} catch (error: any) {
		console.error(error);
		return { message: error.message, success: false };
	}
}

type UpdateUserProps = {
	userId: string;
	name: string;
	username: string;
};

export async function updateUser({ userId, name, username }: UpdateUserProps) {
	try {
		connectToDb();

		const existingUser = await User.findOne({ username: username });

		if (existingUser) {
			if (existingUser.id !== userId && existingUser.username === username) {
				return { message: "Nazwa użytkownika jest zajęta", success: false };
			}
		}

		await User.findOneAndUpdate(
			{ id: userId },
			{ username: username.toLowerCase(), name, onboarded: true },
			{ upsert: true }
		);

        return { message: "Dodano/zaktualizowano użytkownika", success: true }

	} catch (error: any) {
		console.error(error);
		return { message: error.message, success: false };
	}
}

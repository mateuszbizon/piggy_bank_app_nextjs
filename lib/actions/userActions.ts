"use server"

import User from "../models/userModel";
import { connectToDb } from "../mongoose"

export async function getUserById(userId: string) {
    try {
        connectToDb();

        const user = await User.findOne({ id: userId });

        return { data: user }
    } catch (error: any) {
        console.error(error)
        return { message: `Nie można pobrać użytkownika: ${error.message}` }
    }
}
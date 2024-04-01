"use server"

import User from "../models/userModel";
import { connectToDb } from "../mongoose"

export async function getUserById(userId: string) {
    try {
        connectToDb();

        return await User.findOne({ id: userId });
    } catch (error: any) {
        throw new Error(`Failed to get user: ${error.message}`);
    }
}
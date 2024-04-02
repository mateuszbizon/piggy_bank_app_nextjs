import { z } from "zod";

export const userSchema = z.object({
    name: z.string().min(1, "Pole imię jest wymagane").max(20, "Maksymalna długość 20 znaków"),
    username: z.string().min(1, "Pole nazwy użytkownika jest wymagane").max(20, "Maksymalna długość 20 znaków"),
})

export type UserSchemaType = z.infer<typeof userSchema>;
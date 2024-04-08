import z from "zod";

export const piggyBankPersonSchema = z.object({
    name: z.string().min(1, "Nazwa osoby jest wymagana").max(20, "Maksymalna długość 20 znaków")
})

export type PiggyBankPersonSchema = z.infer<typeof piggyBankPersonSchema>
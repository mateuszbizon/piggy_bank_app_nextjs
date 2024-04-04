import z from "zod";

export const piggyBankSchema = z.object({
    name: z.string().min(1, "Nazwa skarbonki jest wymagana").max(20, "Maksymalna długość 20 znaków")
})

export type PiggyBankSchema = z.infer<typeof piggyBankSchema>
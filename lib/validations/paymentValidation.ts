import z from "zod";

export const paymentSchema = z.object({
    payment: z.coerce.number().positive("Liczba musi być większa niż 0").multipleOf(0.01, "Maksymalnie dwie liczby po przecinku")
})

export type PaymentSchema = z.infer<typeof paymentSchema>
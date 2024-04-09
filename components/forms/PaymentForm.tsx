"use client";

import React from 'react'
import Button from '../ui/Button';
import { useForm } from 'react-hook-form';
import { PaymentSchema, paymentSchema } from '@/lib/validations/paymentValidation';
import { zodResolver } from '@hookform/resolvers/zod';
import { createPayment } from '@/lib/actions/paymentActions';
import { usePathname } from 'next/navigation';

type Props = {
    person: PiggyBankPerson;
}

function PaymentForm({ person }: Props) {
    const pathName = usePathname();
    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<PaymentSchema>({
        resolver: zodResolver(paymentSchema),
        defaultValues: {
            payment: 0,
        }
    })

    async function onSubmit(values: PaymentSchema) {
        const result: ApiResponse = await createPayment({
            piggyBankId: person.piggyBankId,
            piggyBankPersonId: person._id,
            piggyBankPersonName: person.name,
            paymentValue: values.payment,
            path: pathName,
        })

        if (!result.success) {
            console.log(result.message)
        } else {
            console.log(result.message)
            reset();
        }
    }

  return (
    <form className='form w-full' onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className='form-box'>
            <label htmlFor="payment">Kwota wpłaty</label>
            <input {...register("payment")} id='payment' type="number" step="0.01" className='input mb-1' />
            <span className='input-error-message'>{errors.payment && errors.payment.message}</span>
        </div>
        <div className='flex justify-end'>
            <Button disabled={isSubmitting}>
                Wpłać
            </Button>
        </div>
    </form>
  )
}

export default PaymentForm
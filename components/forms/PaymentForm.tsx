"use client";

import React from 'react'
import Button from '../ui/Button';
import { useForm } from 'react-hook-form';
import { PaymentSchema, paymentSchema } from '@/lib/validations/paymentValidation';
import { zodResolver } from '@hookform/resolvers/zod';

function PaymentForm() {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<PaymentSchema>({
        resolver: zodResolver(paymentSchema),
        defaultValues: {
            payment: 0,
        }
    })

    async function onSubmit(values: PaymentSchema) {
        console.log('sent')
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
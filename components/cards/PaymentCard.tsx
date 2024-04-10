"use client"

import { formatDate } from '@/lib/utils/dateUtils';
import React from 'react'
import Button from '../ui/Button';

type Props = {
    payment: Payment;
}

function PaymentCard({ payment }: Props) {
  return (
    <div className='flex flex-col items-center sm:flex-row sm:justify-center gap-3 sm:gap-4'>
        <div className='flex gap-4 text-xl'>
            <span>{payment.paymentValue} zł</span>
            <span>{payment.piggyBankPersonName}</span>
        </div>
        <div className='flex gap-4 items-center'>
            <span className='text-xl'>{formatDate(payment.createdAt)}</span>
            <Button>
            {payment.isPaymentAdded ? "Cofnij" : "Przywróć"}
            </Button>
        </div>
    </div>
  )
}

export default PaymentCard
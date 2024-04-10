"use client"

import { formatDate } from '@/lib/utils/dateUtils';
import React, { useState } from 'react'
import Button from '../ui/Button';
import { usePathname } from 'next/navigation';
import { redoPayment, undoPayment } from '@/lib/actions/paymentActions';

type Props = {
    payment: Payment;
}

function PaymentCard({ payment }: Props) {
    const pathName = usePathname();
    const [isLoading, setIsLoading] = useState(false);

    async function handleUndoPayment() {
        setIsLoading(true);

        const result: ApiResponse = await undoPayment({
            paymentId: payment._id,
            piggyBankId: payment.piggyBankId,
            piggyBankPersonId: payment.piggyBankPersonId,
            path: pathName,
        })
        
        if (!result.success) {
            console.log(result.message)
        }

        setIsLoading(false);
    }

    async function handleRedoPayment() {
        setIsLoading(true);

        const result: ApiResponse = await redoPayment({
            paymentId: payment._id,
            piggyBankId: payment.piggyBankId,
            piggyBankPersonId: payment.piggyBankPersonId,
            path: pathName,
        })
        
        if (!result.success) {
            console.log(result.message)
        }

        setIsLoading(false);
    }

  return (
    <div className='flex flex-col items-center sm:flex-row sm:justify-center gap-3 sm:gap-4'>
        <div className='flex gap-4 text-xl'>
            <span>{payment.paymentValue} zł</span>
            <span>{payment.piggyBankPersonName}</span>
        </div>
        <div className='flex gap-4 items-center'>
            <span className='text-xl'>{formatDate(payment.createdAt)}</span>
            <Button onClick={payment.isPaymentAdded ? handleUndoPayment : handleRedoPayment} disabled={isLoading}>
                {payment.isPaymentAdded ? "Cofnij" : "Przywróć"}
            </Button>
        </div>
    </div>
  )
}

export default PaymentCard
"use client"

import React from 'react'
import PaymentForm from '../forms/PaymentForm';
import { TrashIcon, PencilSquareIcon } from '@heroicons/react/24/solid';

type Props = {
    person: PiggyBankPerson;
}

function PiggyBankPersonCard({ person }: Props) {
  return (
    <div key={person._id} className='flex flex-col items-center gap-5 rounded py-3 px-3 bg-secondary-1 h-fit'>
        <span className='text-2xl font-semibold'>{person.name}</span>
        <span className='text-2xl'>{person.amountMoney.toFixed(2)} zł</span>
        <PaymentForm person={person} />
        <div className='flex gap-2 w-full'>
          <button className='delete-btn-circle-transparent'>
            <TrashIcon className='h-7 w-7' />
          </button>
          <button className='main-btn-circle-transparent'>
            <PencilSquareIcon className='h-7 w-7' />
          </button>
        </div>
    </div>
  )
}

export default PiggyBankPersonCard
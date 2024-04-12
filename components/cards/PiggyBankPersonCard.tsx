"use client"

import React, { useState } from 'react'
import PaymentForm from '../forms/PaymentForm';
import { TrashIcon, PencilSquareIcon } from '@heroicons/react/24/solid';
import DeleteModal from '../modals/DeleteModal';
import Shadow from '../ui/Shadow';
import { deletePerson } from '@/lib/actions/piggyBankPersonActions';
import { usePathname } from 'next/navigation';
import { toast } from 'react-toastify';

type Props = {
    person: PiggyBankPerson;
}

function PiggyBankPersonCard({ person }: Props) {
  const pathName = usePathname();
  const [deleteModalActive, setDeleteModalActive] = useState(false);

  async function handleDeletePerson() {
    const result: ApiResponse = await deletePerson({
      piggyBankId: person.piggyBankId,
      piggyBankPersonId: person._id,
      amountMoney: person.amountMoney,
      path: pathName,
    })

    if (!result.success) {
      toast.error(result.message)
    }

    setDeleteModalActive(false);
  }

  return (
    <div key={person._id} className='flex flex-col items-center gap-5 rounded py-3 px-3 bg-secondary-1 h-fit'>
        <span className='text-2xl font-semibold'>{person.name}</span>
        <span className='text-2xl'>{person.amountMoney.toFixed(2)} zł</span>
        <PaymentForm person={person} />
        <div className='flex gap-2 w-full'>
          <button className='delete-btn-circle-transparent' onClick={() => setDeleteModalActive(true)}>
            <TrashIcon className='h-7 w-7' />
          </button>
          <button className='main-btn-circle-transparent'>
            <PencilSquareIcon className='h-7 w-7' />
          </button>
        </div>
        {deleteModalActive && (
          <>
            <Shadow closeShadow={() => setDeleteModalActive(false)} />
            <DeleteModal message='Czy na pewno chcesz usunąć tą osobę?' closeModal={() => setDeleteModalActive(false)} deleteFunction={handleDeletePerson} />
          </>
        ) }
    </div>
  )
}

export default PiggyBankPersonCard
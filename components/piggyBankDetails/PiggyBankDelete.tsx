"use client";

import React, { useState } from 'react'
import Shadow from '../ui/Shadow';
import DeleteModal from '../modals/DeleteModal';
import { deletePiggyBank } from '@/lib/actions/piggyBankActions';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { useUser } from '@/context/UserContext';

type Props = {
    piggyBank?: PiggyBank;
}

function PiggyBankDelete({ piggyBank }: Props) {
    const [deleteModalActive, setDeleteModalActive] = useState(false)
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const { isAuthor } = useUser();

    async function handleDeletePiggyBank() {
        setIsLoading(true);

        const result: ApiResponse = await deletePiggyBank(piggyBank?._id)

        if (!result.success) {
            toast.error(result.message)
        } else {
            toast.success(result.message)
            router.push("/")
        }

        setIsLoading(false);
    }

  return (
    <>
        {isAuthor && (
            <div>
                <button className='delete-btn' onClick={() => setDeleteModalActive(true)}>
                    Usuń skarbonkę
                </button>
                {deleteModalActive && (
                    <>
                        <Shadow closeShadow={() => setDeleteModalActive(false)} />
                        <DeleteModal message='Czy na pewno chcesz usunąć tę skarbonkę?' closeModal={() => setDeleteModalActive(false)} isLoading={isLoading} deleteFunction={handleDeletePiggyBank} />
                    </>
                )}
            </div>
        )}
    </>
  )
}

export default PiggyBankDelete
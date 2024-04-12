"use client"

import React from 'react'
import Button from '../ui/Button';

type Props = {
    message: string;
    closeModal: () => void;
    deleteFunction: () => void;
}

function DeleteModal({ message, closeModal, deleteFunction }: Props) {
  return (
    <div className='fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col gap-7 w-[300px] sm:w-[500px] px-5 py-4 bg-light-1 z-[65]'>
        <p className='text-xl font-medium text-center'>{message}</p>
        <div className='flex justify-center gap-5'>
            <Button onClick={closeModal}>Nie, anuluj</Button>
            <button className='delete-btn' onClick={deleteFunction}>Tak, usuń</button>
        </div>
    </div>
  )
}

export default DeleteModal
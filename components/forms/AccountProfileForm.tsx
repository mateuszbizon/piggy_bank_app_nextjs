"use client"

import React from 'react'
import Button from '../ui/Button'

type Props = {
  user: {
    id: string;
    name: string;
    username: string;
  }

  btnText: string;
}

function AccountProfileForm({ user, btnText }: Props) {
  return (
    <form className='flex flex-col gap-6'>
      <div className='flex flex-col'>
        <label htmlFor="name" className='label mb-2'>Imię</label>
        <input id='name' type="text" className='input mb-1' placeholder='Podaj imię' />
        <span className='input-error-message'>error</span>
      </div>
      <div className='flex flex-col'>
        <label htmlFor="username" className='label mb-2'>Nazwa użytkownika</label>
        <input id='username' type="text" className='input mb-1' placeholder='Podaj nazwę użytkownika' />
        <span className='input-error-message'>error</span>
      </div>
      <div className='flex justify-end'>
        <Button>
          {btnText}
        </Button>
      </div>
    </form>
  )
}

export default AccountProfileForm
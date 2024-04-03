"use client"

import React from 'react'
import Button from '../ui/Button'
import { useForm } from 'react-hook-form'
import { UserSchemaType, userSchema } from '@/lib/validations/userValidation'
import { zodResolver } from '@hookform/resolvers/zod'

type Props = {
  user: {
    id: string;
    name: string;
    username: string;
  }

  btnText: string;
}

function AccountProfileForm({ user, btnText }: Props) {
  const { register, handleSubmit, formState: { errors } } = useForm<UserSchemaType>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      name: user.name,
      username: user.username,
    }
  })

  function onSubmit(values: UserSchemaType) {
    console.log(`sent: ${values}`)
  }
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-6'>
      <div className='flex flex-col'>
        <label htmlFor="name" className='label mb-2'>Imię</label>
        <input {...register("name")} id='name' type="text" className='input mb-1' placeholder='Podaj imię' />
        <span className='input-error-message'>{errors.name && errors.name.message}</span>
      </div>
      <div className='flex flex-col'>
        <label htmlFor="username" className='label mb-2'>Nazwa użytkownika</label>
        <input {...register("username")} id='username' type="text" className='input mb-1' placeholder='Podaj nazwę użytkownika' />
        <span className='input-error-message'>{errors.username && errors.username.message}</span>
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
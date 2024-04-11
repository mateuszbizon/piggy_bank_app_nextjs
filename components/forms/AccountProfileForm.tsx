"use client"

import React from 'react'
import Button from '../ui/Button'
import { useForm } from 'react-hook-form'
import { UserSchemaType, userSchema } from '@/lib/validations/userValidation'
import { zodResolver } from '@hookform/resolvers/zod'
import { usePathname, useRouter } from 'next/navigation'
import { updateUser } from '@/lib/actions/userActions'
import { toast } from 'react-toastify'

type Props = {
  user: {
    id: string;
    name: string;
    username: string;
  }

  btnText: string;
}

function AccountProfileForm({ user, btnText }: Props) {
  const pathName = usePathname();
  const router = useRouter();
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<UserSchemaType>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      name: user.name,
      username: user.username,
    }
  })

  async function onSubmit(values: UserSchemaType) {
    const result: ApiResponse = await updateUser({ userId: user.id, name: values.name, username: values.username })

    if (result.success) {
      if (pathName === "/profile/edit") {
        router.back()
      } else {
        router.push("/")
      }
    } else {
      toast.error(result.message)
    }
  }
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='form'>
      <div className='form-box'>
        <label htmlFor="name" className='label'>Imię</label>
        <input {...register("name")} id='name' type="text" className='input mb-1' placeholder='Podaj imię' />
        <span className='input-error-message'>{errors.name && errors.name.message}</span>
      </div>
      <div className='form-box'>
        <label htmlFor="username" className='label'>Nazwa użytkownika</label>
        <input {...register("username")} id='username' type="text" className='input mb-1' placeholder='Podaj nazwę użytkownika' />
        <span className='input-error-message'>{errors.username && errors.username.message}</span>
      </div>
      <div className='flex justify-end'>
        <Button disabled={isSubmitting}>
          {btnText}
        </Button>
      </div>
    </form>
  )
}

export default AccountProfileForm
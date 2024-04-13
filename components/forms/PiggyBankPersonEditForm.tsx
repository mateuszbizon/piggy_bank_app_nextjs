"use client"

import React from 'react'
import Button from '../ui/Button'
import { piggyBankPersonSchema, PiggyBankPersonSchema } from '@/lib/validations/piggyBankPersonValidation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { editPerson } from '@/lib/actions/piggyBankPersonActions'
import { usePathname } from 'next/navigation'
import { toast } from 'react-toastify'

type Props = {
    person: PiggyBankPerson;
}

function PiggyBankPersonEditForm({ person }: Props) {
    const pathName = usePathname();
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<PiggyBankPersonSchema>({
        resolver: zodResolver(piggyBankPersonSchema),
        defaultValues: {
            name: person.name
        }
    })

    async function onSubmit(values: PiggyBankPersonSchema) {
        const result: ApiResponse = await editPerson({
            piggyBankId: person.piggyBankId,
            piggyBankPersonId: person._id,
            name: values.name,
            path: pathName,
        })

        if (!result.success) {
            toast.error(result.message)
        } else {
            toast.success(result.message)
        }
    }

  return (
    <form className='form w-full' onSubmit={handleSubmit(onSubmit)}>
        <div className='form-box'>
            <label htmlFor="name">Nazwa osoby</label>
            <input {...register("name")} id='name' type="text" className='input mb-1' placeholder='Podaj nazwę osoby' />
            <span className='input-error-message'>{errors.name && errors.name.message}</span>
        </div>
        <div className='flex justify-end'>
        <Button disabled={isSubmitting}>
          Edytuj
        </Button>
      </div>
    </form>
  )
}

export default PiggyBankPersonEditForm
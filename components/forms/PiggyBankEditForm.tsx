"use client"

import React from 'react'
import Button from '../ui/Button'
import { piggyBankSchema, PiggyBankSchema } from '@/lib/validations/piggyBankValidation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { editPiggyBank } from '@/lib/actions/piggyBankActions';
import { usePathname } from 'next/navigation';
import { toast } from 'react-toastify';

type Props = {
    piggyBank?: PiggyBank;
}

function PiggyBankEditForm({ piggyBank }: Props) {
    const pathName = usePathname();
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<PiggyBankSchema>({
        resolver: zodResolver(piggyBankSchema),
        defaultValues: {
            name: piggyBank?.name,
        },
    })

    async function onSubmit(values: PiggyBankSchema) {
        const result: ApiResponse = await editPiggyBank({
            piggyBankId: piggyBank?._id,
            userId: piggyBank?.authorId,
            name: values.name,
            path: pathName,
        })

        if (!result.success) {
            toast.error(result.message)
        }
    }

  return (
    <form className='form' onSubmit={handleSubmit(onSubmit)}>
        <div className='form-box'>
            <label htmlFor="name" className='label'>Nazwa skarbonki</label>
            <input {...register("name")} id='name' className='input mb-1' type="text" placeholder='Podaj nazwę skarbonki' />
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

export default PiggyBankEditForm
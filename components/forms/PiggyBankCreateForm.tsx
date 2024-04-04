"use client"

import React from 'react'
import Button from '../ui/Button';
import { useForm } from 'react-hook-form';
import { PiggyBankSchema, piggyBankSchema } from '@/lib/validations/piggyBankValidation';
import { zodResolver } from '@hookform/resolvers/zod';

function PiggyBankCreateForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<PiggyBankSchema>({
    resolver: zodResolver(piggyBankSchema),
    defaultValues: {
        name: "",
    }
  });

  async function onSubmit(values: PiggyBankSchema) {
    console.log('submitted')
  }
    
  return (
    <form className='form' onSubmit={handleSubmit(onSubmit)}>
        <div className='form-box'>
            <label htmlFor="name" className='label'>Nazwa skarbonki</label>
            <input {...register("name")} id='name' type="text" className='input mb-1' placeholder='Podaj nazwę' />
            <span className='input-error-message'>{errors.name && errors.name.message}</span>
        </div>
        <div className='flex justify-end'>
            <Button>
                Utwórz
            </Button>
        </div>
    </form>
  )
}

export default PiggyBankCreateForm
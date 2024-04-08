import React from 'react'
import Button from '../ui/Button'
import { useForm } from 'react-hook-form';
import { PiggyBankPersonSchema, piggyBankPersonSchema } from '@/lib/validations/piggyBankPersonValidation';
import { zodResolver } from '@hookform/resolvers/zod';
import { createPerson } from '@/lib/actions/piggyBankPersonActions';

type Props = {
  piggyBankId?: string;
}

function PiggyBankPersonForm({ piggyBankId }: Props) {
  const { register, handleSubmit, formState: { errors, isSubmitting }  }  = useForm<PiggyBankPersonSchema>({
    resolver: zodResolver(piggyBankPersonSchema),
    defaultValues: {
      name: "",
    }
  })

  async function onSubmit(values: PiggyBankPersonSchema) {
    const result: ApiResponse = await createPerson({
      piggyBankId: piggyBankId,
      personName: values.name,
    })

    if (!result.success) {
      console.log(result.message)
    } else {
      console.log(result.message)
    }
  }

  return (
    <form className='form' onSubmit={handleSubmit(onSubmit)}>
      <div className="form-box">
        <label htmlFor="name" className='label'>Nazwa osoby</label>
        <input {...register("name")} id='name' type="text" className='input mb-1' placeholder='Podaj nazwę osoby' />
        <span className='input-error-message'>{errors.name && errors.name.message}</span>
      </div>
      <div className='flex justify-end'>
        <Button disabled={isSubmitting}>
          Dodaj
        </Button>
      </div>
    </form>
  )
}

export default PiggyBankPersonForm
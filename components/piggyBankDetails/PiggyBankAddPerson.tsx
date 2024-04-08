"use client"

import React from 'react'
import PiggyBankPersonForm from '../forms/PiggyBankPersonForm';

type Props = {
  userId: string;
  piggyBankId?: string;
}

function PiggyBankAddPerson({ userId, piggyBankId }: Props) {
  return (
    <div className='inner-container'>
      <h2 className='title mb-5'>Dodaj osobę</h2>
      <section className='form-section'>
        <PiggyBankPersonForm userId={userId} piggyBankId={piggyBankId} />
      </section>
    </div>
  )
}

export default PiggyBankAddPerson
"use client"

import React from 'react'
import PiggyBankPersonForm from '../forms/PiggyBankPersonForm';

type Props = {
  userId: string;
  piggyBank?: PiggyBank;
}

function PiggyBankAddPerson({ userId, piggyBank }: Props) {
  return (
    <div className='inner-container'>
      <h2 className='title-2 mb-5'>Dodaj osobę</h2>
      <section className='form-section'>
        <PiggyBankPersonForm piggyBankId={piggyBank?._id} />
      </section>
    </div>
  )
}

export default PiggyBankAddPerson
"use client"

import React from 'react'
import PiggyBankEditForm from '../forms/PiggyBankEditForm';

type Props = {
  piggyBank?: PiggyBank;
}

function PiggyBankEdit({ piggyBank }: Props) {
  return (
    <div className='inner-container'>
      <h2 className='title-2 mb-5'>Edytuj skarbonkę</h2>
      <section className='form-section'>
        <PiggyBankEditForm piggyBank={piggyBank} />
      </section>
    </div>
  )
}

export default PiggyBankEdit
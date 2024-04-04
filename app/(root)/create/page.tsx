import PiggyBankCreateForm from '@/components/forms/PiggyBankCreateForm'
import React from 'react'

function Page() {
  return (
    <>
      <h1 className='title mb-5'>Utwórz skarbonkę</h1>
      <section className='form-section'>
        <PiggyBankCreateForm />
      </section>
    </>
  )
}

export default Page
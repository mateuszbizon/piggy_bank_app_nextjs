import Accordions from '@/components/ui/Accordions';
import { MAIN_ACCORDIONS } from '@/constants';
import { currentUser } from '@clerk/nextjs'
import { redirect } from 'next/navigation';
import React from 'react'

async function Welcome() {
  const user = await currentUser();
   
  if (user) redirect("/")

  return (
    <>
      <h1 className='text-5xl sm:text-6xl text-center'>
        Witaj w
        <br />
        <span className='gradient-text text-center'>skarbonce online</span>
      </h1>
      <p className='mt-10 mb-10 text-xl text-third-1 sm:text-2xl max-w-2xl mx-auto text-center'>w miejscu w którym możesz stworzyć skarbonkę oraz kontrolować ile pieniędzy jest w skarbonce, a także ile dała konkretna osoba.</p>
      <div className='inner-container'>
        <Accordions />
      </div>
    </>
  )
}

export default Welcome
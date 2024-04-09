"use client"

import React from 'react'
import PiggyBankPersonCard from '../cards/PiggyBankPersonCard';

type Props = {
  people?: PiggyBankPerson[];
}

function PiggyBankPeople({ people }: Props) {
  return (
    <div className='grid-container'>
      {people?.map(person => {
        return (
          <PiggyBankPersonCard key={person._id} person={person} />
        )
      })}
    </div>
  )
}

export default PiggyBankPeople
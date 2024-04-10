"use client"

import React from 'react'
import PiggyBankPersonCard from '../cards/PiggyBankPersonCard';
import NoResultMessage from '../messages/NoResultMessage';

type Props = {
  people?: PiggyBankPerson[];
}

function PiggyBankPeople({ people }: Props) {
  return (
    <>
      {people?.length == 0 ? (
        <NoResultMessage message='Nie ma jeszcze żadnych osób w tej skarbonce' />
      ) : (
        <div className='grid-container'>
          {people?.map(person => {
            return (
              <PiggyBankPersonCard key={person._id} person={person} />
            )
          })}
        </div>
      )}
    </>
  )
}

export default PiggyBankPeople
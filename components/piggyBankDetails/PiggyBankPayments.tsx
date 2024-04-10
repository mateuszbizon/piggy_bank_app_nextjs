"use client"

import React from 'react'
import PaymentCard from '../cards/PaymentCard'
import NoResultMessage from '../messages/NoResultMessage'

type Props = {
  payments?: Payment[]
}

function PiggyBankPayments({ payments }: Props) {
  return (
    <>
      {payments?.length == 0 ? (
        <NoResultMessage message='Nie ma jeszcze żadnych wpłat' />
      ) : (
        <div className='inner-container flex flex-col gap-6 sm:gap-10'>
          {payments?.map(payment => {
            return (
              <PaymentCard key={payment._id} payment={payment} />
            )
          })}
        </div>
      )}
    </>
  )
}

export default PiggyBankPayments
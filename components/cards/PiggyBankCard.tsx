import React from 'react'
import Link from 'next/link'

type Props = {
    piggyBank: PiggyBank;
}

function PiggyBankCard({ piggyBank }: Props) {
  return (
        <Link href={`/piggybank/${piggyBank._id}`} className="flex flex-col items-center px-4 py-3 rounded-lg bg-primary hover:bg-primary-2 text-light-1">
          <span className="font-semibold text-2xl mb-6 text-center">{piggyBank.name}</span>
          <span className="mb-4 font-medium text-xl">Suma pieniędzy:</span>
          <span className="font-semibold text-2xl">{piggyBank.amountMoney.toFixed(2)} zł</span>
        </Link>
  )
}

export default PiggyBankCard
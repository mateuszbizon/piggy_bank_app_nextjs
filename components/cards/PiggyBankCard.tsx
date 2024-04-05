import React from 'react'
import Link from 'next/link'

function PiggyBankCard() {
  return (
        <Link href="/" className="flex flex-col items-center px-4 py-3 rounded-lg bg-primary hover:bg-primary-2 text-light-1">
          <span className="font-semibold text-2xl mb-6 text-center">skarbonka alanka</span>
          <span className="mb-4 text-xl">Suma pieniędzy:</span>
          <span className="font-semibold text-2xl">0</span>
        </Link>
  )
}

export default PiggyBankCard
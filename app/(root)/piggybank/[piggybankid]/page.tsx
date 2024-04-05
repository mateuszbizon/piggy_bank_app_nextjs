"use client"

import { useParams } from 'next/navigation'
import React from 'react'

function PiggyBankPage() {
    const { piggybankid } = useParams();
  return (
    <div>{piggybankid}</div>
  )
}

export default PiggyBankPage
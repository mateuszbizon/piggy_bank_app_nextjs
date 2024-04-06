import PiggyBankMain from '@/components/piggyBankDetails/PiggyBankMain';
import { getPiggyBankById } from '@/lib/actions/piggyBankActions';
import { currentUser } from '@clerk/nextjs';
import React from 'react'

async function PiggyBankPage({ params }: { params: { piggybankid: string } }) {
    if (!params.piggybankid) return null;

    const result: ApiResponse<PiggyBank> = await getPiggyBankById(params.piggybankid);

    if (!result.success) return null;

    const user = await currentUser();
    if (!user) return null;

    const piggyBankData = result.data;

  return (
    <>
      <h1 className='title mb-6'>{piggyBankData?.name}</h1>
      <p className='font-semibold text-2xl mb-3'>Suma pieniędzy:</p>
      <p className='font-semibold text-3xl'>{piggyBankData?.amountMoney} zł</p>
      <PiggyBankMain piggyBank={piggyBankData} currentUserId={user.id} />
    </>
  )
}

export default PiggyBankPage
import ErrorMessage from '@/components/messages/ErrorMessage';
import PiggyBankMain from '@/components/piggyBankDetails/PiggyBankMain';
import { getPiggyBankById } from '@/lib/actions/piggyBankActions';
import { getUserById } from '@/lib/actions/userActions';
import { currentUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import React from 'react'

async function PiggyBankPage({ params }: { params: { piggybankid: string } }) {
    if (!params.piggybankid) return null;

    const user = await currentUser();
    if (!user) return null;

    const fetchedUser: ApiResponse<UserResponse> = await getUserById(user.id);

    if (!fetchedUser.data?.onboarded) redirect("/onboarding");

    const fetchedUserId = fetchedUser.data?._id;

    const result: ApiResponse<PiggyBankResponse> = await getPiggyBankById(params.piggybankid);

    if (!result.success) return <ErrorMessage message={result.message} />;

    const piggyBankData = result.data;

  return (
    <>
      <h1 className='title mb-6'>{piggyBankData?.piggyBank.name}</h1>
      <p className='font-semibold text-2xl mb-3'>Suma pieniędzy:</p>
      <p className='font-semibold text-3xl'>{piggyBankData?.piggyBank.amountMoney.toFixed(2)} zł</p>
      <PiggyBankMain piggyBankData={piggyBankData} currentUserId={fetchedUserId} />
    </>
  )
}

export default PiggyBankPage
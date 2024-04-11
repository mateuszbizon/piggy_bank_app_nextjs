import AccountProfileForm from '@/components/forms/AccountProfileForm'
import { getUserById } from '@/lib/actions/userActions';
import { currentUser } from '@clerk/nextjs'
import { redirect } from 'next/navigation';
import React from 'react'

async function Page() {
  const user = await currentUser()
  if (!user) return null;

  const fetchedUser: ApiResponse<UserResponse> = await getUserById(user.id)

  if (!fetchedUser.data?.onboarded) redirect("/onboarding")

  const userData = {
    id: user.id,
    name: fetchedUser.data.name,
    username: fetchedUser.data.username,
  }

  return (
    <div className='inner-container'>
      <h1 className='title mb-5'>Edytuj swój profil</h1>
      <section className='form-section'>
        <AccountProfileForm btnText='Edytuj' user={userData} />
      </section>
    </div>
  )
}

export default Page
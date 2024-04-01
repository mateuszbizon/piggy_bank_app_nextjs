import { currentUser } from '@clerk/nextjs'
import { redirect } from 'next/navigation';
import React from 'react'

async function Welcome() {
  const user = await currentUser();
   
  if (user) redirect("/")

  return (
    <div>Welcome</div>
  )
}

export default Welcome
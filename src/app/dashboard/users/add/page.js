import { auth } from '@/auth';
import { UserDetail } from '@/components/Dashboard/Users/UserDetail'
import { redirect } from 'next/navigation';
import React from 'react'

const Page = async () => {

  const session = await auth();

  if (!session?.user) {
    redirect('/login')
  }

  return (
    <div>
      <UserDetail></UserDetail>
    </div>
  )
}

export default Page
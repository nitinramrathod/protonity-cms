import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import React from 'react'

const Page = async() => {

  const session = await auth();

  if (!session?.user) {
      redirect('/login')
  }

  return (
    <h1>Dashboard</h1>
  )
}

export default Page 
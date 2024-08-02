import { auth } from '@/auth';
import Form from '@/components/website/login/Form'
import { redirect } from 'next/navigation';
import React from 'react'

const Page = async() => {

  const session = await auth();

  if(session?.user){
    redirect('/dashboard')
  }

  return (
    <Form session={session}/>
  )
}

export default Page
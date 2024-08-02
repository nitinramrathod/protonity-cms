import { auth } from '@/auth'
import EnquiryList from '@/components/Dashboard/EnquiryList'
import Table from '@/components/Table/Table'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import React from 'react'


const page = async () => {


  const session = await auth();

  if (!session?.user) {
      redirect('/login')
  }


  revalidatePath('/dashboard/enquiries')
  return (
    <div>
      <EnquiryList></EnquiryList>
    </div>
  )
}

export default page
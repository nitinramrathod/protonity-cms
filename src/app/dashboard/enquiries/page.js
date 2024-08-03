import { auth } from '@/auth'
import EnquiryList from '@/components/Dashboard/EnquiryList'
import ListPageHeader from '@/components/Dashboard/ListPageHeader'
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
      <EnquiryList/>
    </div>
  )
}

export default page
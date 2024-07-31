import EnquiryList from '@/components/Dashboard/EnquiryList'
import Table from '@/components/Table/Table'
import { revalidatePath } from 'next/cache'
import React from 'react'


const page = async () => {

  revalidatePath('/dashboard/enquiries')
  return (
    <div>
      <EnquiryList></EnquiryList>
    </div>
  )
}

export default page
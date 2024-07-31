import UserList from '@/components/Dashboard/UserList';
import { revalidatePath } from 'next/cache'


const Page = async () => {
    revalidatePath('/dashboard/users')
   
    return (
       <UserList/>
    )
}

export default Page
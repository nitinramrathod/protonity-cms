import { auth } from '@/auth';
import UserList from '@/components/Dashboard/Users/UserList';
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation';



const Page = async () => {
    revalidatePath('/dashboard/users')

    const session = await auth();

    if (!session?.user) {
        redirect('/login')
    }


    return (
        <UserList />
    )
}

export default Page
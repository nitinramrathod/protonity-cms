import UserCard from '@/components/users/UserCard';
import { fetchUsers } from '@/utils/services';
import { revalidatePath } from 'next/cache'


const Page = async () => {
    revalidatePath('/dashboard/users')
    let users;
    try {
        users = await fetchUsers();
    } catch (error) {
        console.error("error==>", error);
    }

    console.log('users', users)


    return (
        <div>
            <h1>User List</h1>
            {users?.length > 0 && users?.map((item, index) => (
                <UserCard
                    key={item.email}
                    username={item.username}
                    email={item.email}
                    password={item.password} />
            ))}
        </div>


    )
}

export default Page
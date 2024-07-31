import UserCard from '@/components/users/UserCard';
import { fetchUsers } from '@/utils/services';

const Page = async () => {
    let users;
    try {
        users = await fetchUsers();
    } catch (error) {
        console.error("error==>", error);
    }


    return (
        <div>
            {users && users?.map((item, index) => (
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
import axios from "axios";
const BASE_URL =  process.env.BASE_URL;

const MONGODB_URI = process.env.MONGODB_URI;

console.log('MONGODB_URI===> ', MONGODB_URI);
console.log('BASE_URL ===>', BASE_URL);


const fetchUsers = async () => {
    try {
        const response = await axios({
            method: 'GET',
            url: BASE_URL + '/api/users',
        });
        return response.data;
    } catch (error) {
        return new Error('Error fetching users:', error)
    }
}

export {
    fetchUsers
}
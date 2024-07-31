import axios from "axios";

const DOMAIN = "http://localhost:3000"


const fetchUsers = async () => {
    try {
        const response = await axios({
            method: 'GET',
            url: DOMAIN + '/api/users',
        });
        return response.data;
    } catch (error) {
        return new Error('Error fetching users:', error)
    }
}

export {
    fetchUsers
}
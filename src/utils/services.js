import axios from "axios";
const BASE_URL =  process.env.BASE_URL;

const fetchUsers = async () => {
    try {
        const response = await axios({
            method: 'GET',
            url: '/api/users',
        });
        return response.data;
    } catch (error) {
        return new Error('Error fetching users:', error)
    }
}
const fetchEnquiries = async (params) => {
    try {
        const response = await axios({
            method: 'GET',
            url: BASE_URL + '/api/enquiries',
            params
        });
        return response.data;
    } catch (error) {
        return new Error('Error fetching users:', error)
    }
}

const storeEnquiry = async (data) => {
    try {
        const response = await axios({
            method: 'POST',
            url: BASE_URL + '/api/enquiries',
            data
        });
        return response.data;
    } catch (error) {
        return new Error('Error in storing enquiry:', error)
    }
}
const storeUser = async (data) => {
    try {
        const response = await axios({
            method: 'POST',
            url: `/api/users`,
            headers: {
                "X-Requested-With": "XMLHttpRequest",
            },
            data
        });
        return response.data;
    } catch (error) {
        return new Error('Error in storing user:', error)
    }
}

export {
    fetchUsers,
    storeEnquiry,
    fetchEnquiries,
    storeUser
}
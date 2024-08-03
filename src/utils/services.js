import axios from "axios";
const BASE_URL =  process.env.BASE_URL;


const fetchEnquiries = async (params) => {
    try {
        const response = await axios({
            method: 'GET',
            url: '/api/enquiries',
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
            url: '/api/enquiries',
            data
        });
        return response.data;
    } catch (error) {
        return new Error('Error in storing enquiry:', error)
    }
}

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

const deleteUser = async (id) => {
    try {
        const response = await axios({
            method: 'DELETE',
            url: '/api/users',
            params: {
                userId: id
            }
        });
        return response.data;
    } catch (error) {
        return new Error('Error in deleting user:', error)
    }
}
const deleteEnquiry = async (id) => {
    try {
        const response = await axios({
            method: 'DELETE',
            url: '/api/enquiries/'+id,
        });
        return response.data;
    } catch (error) {
        return new Error('Error in deleting enquiry:', error)
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
const login = async (data) => {
    try {
        const response = await axios({
            method: 'POST',
            url: `/api/login`,
            headers: {
                "X-Requested-With": "XMLHttpRequest",
            },
            data
        });
        return response?.data;
    } catch (error) {
        return new Error('Error in storing user:', error)
    }
}

export {
    fetchUsers,
    storeEnquiry,
    fetchEnquiries,
    storeUser,
    deleteUser,
    deleteEnquiry,
    login
}
import axios from 'axios'

const myAxiosInstance = axios.create({
    baseURL: 'http://localhost:4000/',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
})

// here we can add our token and etc.
myAxiosInstance.interceptors.request.use()

export default myAxiosInstance

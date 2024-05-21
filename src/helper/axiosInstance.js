import axios from 'axios' 
const baseURL = "https://impulsioneai-api.onrender.com"


export const axiosInstanceLogin = axios.create({
    baseURL: baseURL + "/auth",
})
export const axiosInstance = axios.create({
    baseURL: baseURL
})
export const axiosInstanceToken = () =>{
    const token = localStorage.getItem('token')
    return axios.create({
        baseURL: baseURL,
        headers:{
            Authorization: "Bearer " + token
        }
    })
} 

export default axiosInstance;
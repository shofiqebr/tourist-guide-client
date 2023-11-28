import axios from "axios";

const axiosPublic = axios.create({
    // baseURL: 'https://tourist-guide-server-ten.vercel.app'
    baseURL: 'https://tourist-guide-server-ten.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;
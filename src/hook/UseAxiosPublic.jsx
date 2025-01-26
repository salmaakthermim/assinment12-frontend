// import axios from "axios";

import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://assignment-12-server-two-hazel.vercel.app'
})
const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;

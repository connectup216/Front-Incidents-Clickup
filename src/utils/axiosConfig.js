import axios from "axios";

export const makeRequests = axios.create({
    baseURL: import.meta.env.VITE_BACK_URL
})
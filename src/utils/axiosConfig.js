import axios from "axios";
export const makeRequests = axios.create({
    baseURL: "http://localhost:3006/api"
})
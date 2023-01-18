import { makeRequests } from "../utils/axiosConfig";

export const getHistoryByU = async(userId) => {

    const {data} = await makeRequests.get(`/historyTasks/user/${userId}`)
    return data
}
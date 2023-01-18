import { makeRequests } from "../utils/axiosConfig";

export const getTaskByTime = async(filterDate) => {

    const {data} = await makeRequests.get(`/tasks/dates/${filterDate}`)

    return data
}
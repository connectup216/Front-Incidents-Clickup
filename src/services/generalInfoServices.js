import { makeRequests } from "../utils/axiosConfig";

export const getIncidentsInfo = async() => {
    const {data} = await makeRequests.get(`/tasks/`)
    return data
}

export const getTasksWithMembersData = async() => {
    const {data} = await makeRequests.get(`/tasks/generalInformation`)
    return data
}

export const getTaskByTime = async(filterDate) => {
    const {data} = await makeRequests.get(`/tasks/dates/${filterDate}`)
    return data
}
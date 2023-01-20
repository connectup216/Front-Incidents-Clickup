import { makeRequests } from "../utils/axiosConfig";

export const getIncidentsInfo = async (date_gt, date_lt) => {
    const {data} = await makeRequests.get(`/tasks/general?date_lt=${date_lt}&date_gt=${date_gt}`)
    return data
}

export const getTasksWithMembersData = async(date_gt, date_lt) => {
    const {data} = await makeRequests.get(`/tasks/generalInformation?date_lt=${date_lt}&date_gt=${date_gt}`)
    return data
}
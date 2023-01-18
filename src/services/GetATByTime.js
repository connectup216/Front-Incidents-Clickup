import { makeRequests } from "../utils/axiosConfig";

export const getATByTime = async({userId, date_gt, date_lt}) => {

    const {data} = await makeRequests.get(`/tasks/assignTime?userId=${userId}&date_lt=${date_lt}&date_gt=${date_gt}`)
    const res = await makeRequests.get(`/historyTasks/userWtime?userId=${userId}&date_lt=${date_lt}&date_gt=${date_gt}`)

    const dataHistory = res.data;

    return {
        data,
        dataHistory
    }
}
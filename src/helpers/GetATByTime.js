import axios from "axios";

export const getATByTime = async({userId, date_gt, date_lt}) => {

    const {data} = await axios.get(`https://api.cu.connectupweb.com/api/tasks/assignTime?userId=${userId}&date_lt=${date_lt}&date_gt=${date_gt}`)
    const res = await axios.get(`https://api.cu.connectupweb.com/api/historyTasks/userWtime?userId=${userId}&date_lt=${date_lt}&date_gt=${date_gt}`)

    const dataHistory = res.data;

    return {
        data,
        dataHistory
    }
}
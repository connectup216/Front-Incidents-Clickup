import axios from "axios";

export const getATByTime = async({userId, date_gt, date_lt}) => {

    const {data} = await axios.get(`http://localhost:3000/api/tasks/assignTime?userId=${userId}&date_lt=${date_lt}&date_gt=${date_gt}`)
    return data
}
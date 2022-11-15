import axios from "axios";

export const getHistoryByU = async(userId) => {

    const {data} = await axios.get(`http://localhost:3000/api/historyTasks/user/${userId}`)
    return data
}
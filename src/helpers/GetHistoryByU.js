import axios from "axios";

export const getHistoryByU = async(userId) => {

    const {data} = await axios.get(`https://api.cu.connectupweb.com/api/historyTasks/user/${userId}`)
    return data
}
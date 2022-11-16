import axios from "axios";

export const getTaskByTime = async(filterDate) => {

    const {data} = await axios.get(`https://api.cu.connectupweb.com/api/tasks/dates/${filterDate}`)

    return data
}
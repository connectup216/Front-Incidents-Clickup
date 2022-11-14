import axios from "axios";

export const getTaskByTime = async(filterDate) => {

    const {data} = await axios.get(`http://localhost:3000/api/tasks/dates/${filterDate}`)

    return data
}
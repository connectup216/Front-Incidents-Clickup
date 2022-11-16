import axios from "axios";

export const getAssigneeTasks = async(assigneeId) => {

    const {data} = await axios.get(`https://api.cu.connectupweb.com/api/tasks/user/${assigneeId}`)

    return data
}
import axios from "axios";

export const getAssigneeTasks = async(assigneeId) => {

    const {data} = await axios.get(`http://localhost:3000/api/tasks/user/${assigneeId}`)

    return data
}
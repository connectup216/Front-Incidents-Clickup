import { makeRequests } from "../utils/axiosConfig";

export const getAssigneeTasks = async(assigneeId) => {

    const {data} = await makeRequests.get(`/tasks/user/${assigneeId}`)

    return data
}
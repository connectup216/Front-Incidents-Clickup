import { makeRequests } from "../utils/axiosConfig";

export const getAssigneeTasks = async(userId, date_gt, date_lt) => {
    const {data} = await makeRequests.get(`/tasks/user?userId=${userId}&date_lt=${date_lt}&date_gt=${date_gt}`)
    const res = await makeRequests.get(`/historyTasks/user?userId=${userId}&date_lt=${date_lt}&date_gt=${date_gt}`)

    const dataHistory = res.data;
    return { data, dataHistory}
}

export const getMembers = async() => {

    const {data} = await makeRequests.get(`/members/`)
    const members = data.members.map( member => {
        return {
            id: member.id,
            username: member.username,
            initials: member.initials,
            color: member.color
        }
    })

    return members
}
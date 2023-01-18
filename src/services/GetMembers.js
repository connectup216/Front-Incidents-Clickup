import { makeRequests } from "../utils/axiosConfig";

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
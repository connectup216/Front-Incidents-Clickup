import axios from "axios";

export const getMembers = async() => {

    const {data} = await axios.get(`http://localhost:3000/api/members/`)
    
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
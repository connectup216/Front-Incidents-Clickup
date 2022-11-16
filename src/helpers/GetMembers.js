import axios from "axios";

export const getMembers = async() => {

    const {data} = await axios.get(`https://api.cu.connectupweb.com/api/members/`)
    
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
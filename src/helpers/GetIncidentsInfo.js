import axios from "axios";

export const getIncidentsInfo = async() => {

    const {data} = await axios.get(`https://api.cu.connectupweb.com/api/tasks/`)

    return data
}
import axios from "axios";

export const getIncidentsInfo = async() => {

    const {data} = await axios.get(`http://localhost:3000/api/tasks/`)

    return data
}
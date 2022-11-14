import { useEffect, useState } from "react";
import { getIncidentsInfo } from "../helpers/GetIncidentsInfo";

export const useGetIncidentsInfo = () => {

    const [tasks, setTasks] = useState('');
    const [isLoading, setIsLoading] = useState( true );

    const getTasksReq = async () => {
        const tasksReq = await getIncidentsInfo();
        setTasks(tasksReq);
        setIsLoading(false);
    } 

    useEffect( ()=>{
        getTasksReq();
    }, [])

    return {
        tasks,
        setTasks,
        isLoading,
        setIsLoading
    }

}
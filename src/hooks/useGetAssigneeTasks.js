import { useEffect, useState } from "react";
import { getAssigneeTasks } from "../services/memberServices";

export const useGetAssigneeTasks = (userId, date_gt = 'none', date_lt = 'none') => {

    const [tasksByAssignee, setTasksByAssignee] = useState({
        tasks: null,
        dataHistory: null
    });
    const [isLoading, setIsLoading] = useState( true );

    const getTasksByAssigneeReq = async () => {
        const {data, dataHistory} = await getAssigneeTasks(userId, date_gt, date_lt);
        setTasksByAssignee({
            tasks: data,
            dataHistory: dataHistory
        });
    } 

    useEffect( ()=>{
        getTasksByAssigneeReq();
    }, [])

    return {
        tasksByAssignee,
        setTasksByAssignee,
        isLoading,
        setIsLoading,
    }

}
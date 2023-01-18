import { useEffect, useState } from "react";
import { getAssigneeTasks } from "../services/GetAssigneeTasks";

export const useGetAssigneeTasks = (assigneeId) => {

    const [tasksByAssignee, setTasksByAssignee] = useState('');
    const [isLoading, setIsLoading] = useState( true );

    const getTasksByAssigneeReq = async () => {
        const tasksReq = await getAssigneeTasks(assigneeId);
        setTasksByAssignee(tasksReq);
        setIsLoading(false);
    } 

    useEffect( ()=>{
        getTasksByAssigneeReq();
    }, [])

    return {
        tasksByAssignee,
        setTasksByAssignee,
        isLoading,
    }

}
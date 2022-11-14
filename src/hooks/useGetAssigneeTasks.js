import { useEffect, useState } from "react";
import { getAssigneeTasks } from "../helpers/GetAssigneeTasks";

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
        isLoading,
    }

}
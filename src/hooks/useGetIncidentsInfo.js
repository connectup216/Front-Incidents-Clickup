import { useState } from "react";
import { getIncidentsInfo, getTasksWithMembersData } from "../services/generalInfoServices";

export const useGetIncidentsInfo = () => {

    const [tasks, setTasks] = useState('');
    const [isLoading, setIsLoading] = useState( true );

    const [tasksWithMembersInfo, setTasksWithMembersInfo] = useState('');
    const [isLoadingTkMmbrInfo, setIsLoadingTkMmbrInfo] = useState( true );

    const getTasksReq = async () => {
        const tasksReq = await getIncidentsInfo();
        setTasks(tasksReq);
        setIsLoading(false);
    } 

    const getTasksWthMembrsInfo = async () => {
        const tasksReq = await getTasksWithMembersData();
        setTasksWithMembersInfo(tasksReq);
        setIsLoadingTkMmbrInfo(false);
    } 

    return {
        tasks,
        isLoading,
        tasksWithMembersInfo,
        isLoadingTkMmbrInfo,
        getTasksReq,
        getTasksWthMembrsInfo,
    }

}
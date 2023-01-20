import { useState } from "react";
import { getIncidentsInfo, getTasksWithMembersData } from "../services/generalInfoServices";

export const useGetIncidentsInfo = () => {

    const [tasks, setTasks] = useState('');
    const [isLoading, setIsLoading] = useState( true );

    const [tasksWithMembersInfo, setTasksWithMembersInfo] = useState('');
    const [isLoadingTkMmbrInfo, setIsLoadingTkMmbrInfo] = useState( true );

    const getTasksReq = async (date_gt = 'none', date_lt = 'none') => {
        setIsLoading(true);

        const tasksReq = await getIncidentsInfo(date_gt, date_lt);
        setTasks(tasksReq);

        setIsLoading(false);
    } 

    const getTasksWthMembrsInfo = async (date_gt = 'none', date_lt = 'none') => {
        setIsLoadingTkMmbrInfo(true);

        const tasksReq = await getTasksWithMembersData(date_gt, date_lt);
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
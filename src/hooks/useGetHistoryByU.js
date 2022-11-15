import { useEffect, useState } from "react";
import { getHistoryByU } from "../helpers/GetHistoryByU";

export const useGetHistoryByU = (assigneeId) => {

    const [historyByAssignee, setHistoryByAssignee] = useState('');
    const [isLoadingH, setIsLoading] = useState( true );

    const getHistoryByAssigneeReq = async () => {
        const tasksReq = await getHistoryByU(assigneeId);
        setHistoryByAssignee(tasksReq);
        setIsLoading(false);
    } 

    useEffect( ()=>{
        getHistoryByAssigneeReq();
    }, [])

    return {
        historyByAssignee,
        setHistoryByAssignee,
        isLoadingH,
    }

}
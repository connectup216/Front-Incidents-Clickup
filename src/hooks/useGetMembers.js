import { useEffect, useState } from "react";
import { getMembers } from "../services/GetMembers";

export const useGetMembers = () => {

    const [members, setMembers] = useState('');
    const [isLoading, setIsLoading] = useState( true );

    const getMembersReq = async () => {
        const folderMembers = await getMembers();
        setMembers(folderMembers);
        setIsLoading(false);
    } 

    useEffect( ()=>{
        getMembersReq();
    }, [])

    return {
        members,
        isLoading,
    }

}
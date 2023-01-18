import { useState } from "react";

import { Member } from "./Member"
import { EmployeeProfile } from './EmployeeProfile';
import { useGetMembers } from '../../hooks/useGetMembers';
import { Loading } from "../loading/Loading";
import { LoadingWhite } from "../loading/LoadingWhite";

export const Members = () => {

    const { members, isLoading } = useGetMembers();
    const [ memberProfile, setMemberProfile] = useState('')

    const seeMemberProfile = (member) => {
        setMemberProfile(member)
    }
    
    const closeMemberProfile = () => {
        setMemberProfile('')
    }

    return (
        <>
            <div>
                <h3>People</h3>
                <hr />
            </div>
            <div>
            {
                isLoading 
                ? <LoadingWhite />
                : members?.map( member => 
                        <Member 
                            key={member.id}
                            seeMemberProfile={seeMemberProfile}
                            {...member}
                        />
                    )
            }
            </div>
            {
                memberProfile !== '' ? 
                    <EmployeeProfile 
                        member={memberProfile} 
                        closeMemberProfile={closeMemberProfile}/> 
                    : ''
            }
        </>
    )
}

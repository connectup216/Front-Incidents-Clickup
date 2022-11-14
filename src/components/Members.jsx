import { useState } from "react";

import { Member } from "./Member"
import { EmployeeProfile } from './EmployeeProfile';
import { useGetMembers } from '../hooks/useGetMembers';

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
            {isLoading ? 
                <h2>Loading...</h2> : 
                members?.map( member => 
                    <Member 
                        key={member.id}
                        seeMemberProfile={seeMemberProfile}
                        {...member}
                    />
                )}
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

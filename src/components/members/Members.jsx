import { useState, useEffect, useRef } from "react";

import { Member } from "./Member"
import { EmployeeProfile } from './EmployeeProfile';
import { useGetMembers } from '../../hooks/useGetMembers';
import { LoadingWhite } from "../loading/LoadingWhite";
import { FiltersTime } from "../filters/FiltersTime";
import { IoIosArrowBack } from 'react-icons/io'

export const Members = ({isHidden, onFilter}) => {

    const { members, isLoading } = useGetMembers();
    const [ memberProfile, setMemberProfile] = useState('')
    const [showMembers, setShowMembers] = useState(true)

    const onShowMembers = () => setShowMembers(!showMembers)
    const membersDropdown = useRef(null)
    
    useEffect(() => {
        if(membersDropdown.current !== null){
            if(showMembers){
                membersDropdown.current.style.display = 'block'
                setTimeout(() => {
                    membersDropdown.current.style.opacity = '100%'
                }, 200)
            }else{
                membersDropdown.current.style.opacity = '0%'
                setTimeout(() => {
                    membersDropdown.current.style.display = 'none'
                }, 200)
            }
        }
    }, [showMembers])

    let rotation = showMembers ? 'rotate(270deg)' : 'rotate(180deg)'

    const seeMemberProfile = (member) => {
        setMemberProfile(member)
    }
    
    const closeMemberProfile = () => {
        setMemberProfile('')
    }
    
    return (
        <div className={isHidden!=='members' ? 'hidden' : ''}>
            <div className="dropdown-section-container">
                <h3>People</h3>
                <IoIosArrowBack onClick={onShowMembers} size={40} style={{transform: rotation }} />
            </div>
            <div ref={membersDropdown} className="dropdown-body">
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
            <FiltersTime isHidden={'filters'}  onFilter={onFilter} />
        </div>
    )
}

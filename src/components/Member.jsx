export const Member = ({id, username, seeMemberProfile, initials, color}) => {

    const memberInfo = {
        id: id,
        username: username,
        initials: initials,
        color: color
    }

    return (
        <div onClick={()=>seeMemberProfile(memberInfo)} className="member-item">
            <figure className="member-initials" style={{backgroundColor: color}}>{initials}</figure>
            <p>{username}</p>
        </div>
    )
}

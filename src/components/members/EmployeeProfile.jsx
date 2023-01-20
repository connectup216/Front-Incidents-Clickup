import { IncidentsSummaryEmployee } from '../summaries/IncidentsSummaryEmployee';

import { Pie } from 'react-chartjs-2';
import { Loading } from '../loading/Loading';
import { useRef } from 'react';
import { useEmployeeProfile } from '../hooks/useEmployeeProfile';

export const EmployeeProfile = ({member, closeMemberProfile}) => {

  const userChart = useRef(null)

  const {
    tasksByAssignee,
    isLoading,
    historyByAssignee,
    options,
    dataChart,
    filterChange,
  } = useEmployeeProfile(member)

  return (

    <section className="employee-profile-section">
        <div className="profile-container">

            <div className="member-profile-header">
              <div>
                <figure className="member-initials m-i-header" style={{backgroundColor: member.color}}>{member.initials}</figure>
                <h4>{member.username}<br/><span>Incidents - Info</span><br/></h4>
              </div>
              <button onClick={closeMemberProfile} className='btn-close'>Close</button>
            </div>

            <div className='member-profile-body'>
              <div className='graph-in-profile'>
                {
                  isLoading 
                  ? <Loading /> 
                  : <Pie ref={userChart} data={dataChart} options={options}/>
                }
              </div>

              <IncidentsSummaryEmployee 
                filterChange={filterChange} 
                incidentsOpen={tasksByAssignee?.tasks?.total_incidents_open} 
                incidentsClosed={tasksByAssignee?.tasks?.total_incidents_closed}
                incidentsClosedByH={historyByAssignee}
                memberId={member.id}
                memberName={member.username}
                chart={userChart}
              /> 
            </div>
        </div>
    </section>

  )
}

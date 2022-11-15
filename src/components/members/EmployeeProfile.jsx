import { useGetAssigneeTasks } from '../../hooks/useGetAssigneeTasks';
import { DoughnutChart } from '../DoughnutChart'
import { IncidentsSummaryEmployee } from '../summaries/IncidentsSummaryEmployee';

export const EmployeeProfile = ({member, closeMemberProfile}) => {

  const { tasksByAssignee,setTasksByAssignee, isLoading} = useGetAssigneeTasks(member.id)

  const filterChange = (filterData) => {
    setTasksByAssignee(filterData)
  }

  const data = {
      labels: Object.keys(tasksByAssignee),
      datasets: [
        {
          label: '# of Votes',
          data: Object.values(tasksByAssignee),
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
          ],
          borderColor: [
            'rgba(0, 0, 0, 1)',
            'rgba(0, 0, 0, 1)',
          ],
          borderWidth: 1,
          hoverOffset: 10,
        },
      ]};

  return (

    <section className="employee-profile-section">
        <div className="profile-container">

            <div className="member-item member-profile-header">
                <figure className="member-initials" style={{backgroundColor: member.color}}>{member.initials}</figure>
                <h4>{member.username}<br/><span>Incidents - Info</span><br/></h4>
                <button onClick={closeMemberProfile} className='btn-close'>X</button>
            </div>

            <div className='graph-in-profile'>
              {isLoading ? <h4>Loading...</h4> : <DoughnutChart data={data}/>}
            </div>

            <IncidentsSummaryEmployee 
              filterChange={filterChange} 
              incidentsOpen={tasksByAssignee.total_incidents_open} 
              incidentsClosed={tasksByAssignee.total_incidents_closed}
              memberId={member.id}
            /> 

        </div>
    </section>

  )
}

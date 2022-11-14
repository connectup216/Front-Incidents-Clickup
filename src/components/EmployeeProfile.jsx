import { DoughnutChart } from './DoughnutChart'
import { IncidentsSummaryEmployee } from './IncidentsSummaryEmployee';

export const EmployeeProfile = ({member, closeMemberProfile}) => {

    const data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 206, 86)',
              'rgb(75, 192, 192)',
              'rgb(153, 102, 255)',
              'rgb(255, 159, 64)',
            ],
            borderColor: [
              'rgba(0, 0, 0, 1)',
              'rgba(0, 0, 0, 1)',
              'rgba(0, 0, 0, 1)',
              'rgba(0, 0, 0, 1)',
              'rgba(0, 0, 0, 1)',
              'rgba(0, 0, 0, 1)',
            ],
            color: 'rgba(0, 0, 0, 1)',
            borderWidth: 1,
            hoverOffset: 10,
            
          },
        ],
        options: {
            plugins: { 
              legend: {
                labels: {
                  fontColor: "white", 
                  font: {
                    size: 18 
                  }
                }
              }
            },scales: {
                yAxes: [{
                    ticks: {
                        fontColor: "green",
                        fontSize: 18,
                        stepSize: 1,
                        beginAtZero: true
                    }
                }],
                xAxes: [{
                    ticks: {
                        fontColor: "purple",
                        fontSize: 14,
                        stepSize: 1,
                        beginAtZero: true
                    }
                }]
            }
        }};

  return (

    <section className="employee-profile-section">
        <div className="profile-container">
            <div className="member-item member-profile-header">
                <figure className="member-initials" style={{backgroundColor: member.color}}>{member.initials}</figure>
                <h4>{member.username}<br/><span>Incidents - Info</span><br/></h4>
                <button onClick={closeMemberProfile} className='btn-close'>X</button>
            </div>

            <div className='graph-in-profile'>
                <DoughnutChart data={data}/>
            </div>

            <IncidentsSummaryEmployee/> 
            
        </div>
    </section>

  )
}

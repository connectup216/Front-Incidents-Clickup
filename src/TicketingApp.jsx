import { useState } from 'react'
import { HeaderComp, Members, Filters, DoughnutChart,IncidentsSummaryMain } from './components'
import { useGetIncidentsInfo } from './hooks/useGetIncidentsInfo';

function TicketingApp() {

  const [ sectionVisible, setSectionVisible ] = useState('filters');
  const { tasks, setTasks, isLoading } = useGetIncidentsInfo()

  const changeBarVisible = (section) => {
    setSectionVisible(section)
  }

  const filterChange = (filterData) => {
    setTasks(filterData)
  }

  const data = {
    labels: Object.keys(tasks),
    datasets: [
      {
        label: '# Of incidents',
        data: Object.values(tasks),
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
    ]};


  return (
    <>
      <HeaderComp changeSection={changeBarVisible} />
      <section className='main-container'>
        <div className='graph-container'>
          {isLoading ? <h4>Loading...</h4> : <DoughnutChart data={data} tittle='Graph of incidents'/>}
        </div>
        <div className='filters-container'>
          {sectionVisible == 'filters' ? <Filters filterChange={filterChange} /> : <Members/>}
          
          {isLoading ? <h4>Loading...</h4> : <IncidentsSummaryMain incidentsOpen={tasks.total_incidents_open} incidentsClosed={tasks.total_incidents_closed}/>}
        </div>
      </section>
    </>
  )
}

export default TicketingApp

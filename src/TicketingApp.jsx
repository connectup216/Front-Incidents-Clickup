import { useState } from 'react'
import { HeaderComp, Members, Filters, IncidentsSummaryMain } from './components'
import { ChartsWithMemberInfo } from './components/ChartsWithMemberInfo'
import { GeneralChart } from './components/GeneralChart'

function TicketingApp() {

  const [sectionVisible, setSectionVisible] = useState('filters')
  const [tasksRelevantInfo, setTasksRelevantInfo] = useState({})

  const changeBarVisible = (section) => {
    setSectionVisible(section)
  }

  const onTasks = (tasksInfo) => {
    setTasksRelevantInfo(tasksInfo)
  }

  return (
    <>
      <HeaderComp changeSection={changeBarVisible} />
      <section className='main-container'>
        <div className='graph-container'>

          <GeneralChart isHidden={sectionVisible} onTasks={onTasks} tittle='Graph of incidents'/> 
          <ChartsWithMemberInfo isHidden={sectionVisible} onTasks={onTasks} />
        
        </div>
        <div className='filters-container'>
          {sectionVisible == 'filters' ? <Filters /> : <Members/>}
          
          {
            tasksRelevantInfo?.total_incidents_open 
            &&  
            <IncidentsSummaryMain 
              incidentsOpen={tasksRelevantInfo?.total_incidents_open} 
              incidentsClosed={tasksRelevantInfo?.total_incidents_closed}
            />
          }
        </div>
      </section>
    </>
  )
}

export default TicketingApp

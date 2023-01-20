import { useState } from 'react'
import { HeaderComp, Members, FiltersTime, IncidentsSummaryMain } from './components'
import { ChartsWithMemberInfo } from './components/ChartsWithMemberInfo'
import { GeneralChart } from './components/GeneralChart'
import { useChartsWtMbrsInfo } from './components/hooks/useChartsWtMbrsInfo'
import { useGeneralChart } from './components/hooks/useGeneralChart'
import { LoadingWhite } from './components/loading/LoadingWhite'

function TicketingApp() {

  const [sectionVisible, setSectionVisible] = useState('filters')
  const [tasksRelevantInfo, setTasksRelevantInfo] = useState({})

  const changeBarVisible = (section) => {
    setSectionVisible(section)
  }

  const onTasks = (tasksInfo) => {
    setTasksRelevantInfo(tasksInfo)
  }

  const {
    isLoading,
    chartData,
    options,
    getTasksReq
  } = useGeneralChart(onTasks)

  const {
    isLoadingTkMmbrInfo,
    chartDataTSKOpen,
    chartDataTSKClosed,
    chartDataTSKClosedHI,
    optionsWTMF,
    inViewChart,
    onChangeChart,
    getTasksWthMembrsInfo
} = useChartsWtMbrsInfo();

  return (
    <>
      <HeaderComp changeSection={changeBarVisible} />
      <section className='main-container'>
        <div className='graph-container'>

          <GeneralChart 
            isHidden={sectionVisible} 
            onTasks={onTasks} 
            tittle='Graph of incidents'
            options={options}
            chartData={chartData}
            isLoading={isLoading}
          /> 
          <ChartsWithMemberInfo 
            isHidden={sectionVisible} 
            inViewChart={inViewChart}
            chartDataTSKOpen= {chartDataTSKOpen}
            chartDataTSKClosed= {chartDataTSKClosed}
            chartDataTSKClosedHI= {chartDataTSKClosedHI}
            isLoadingTkMmbrInfo={isLoadingTkMmbrInfo}
            options={optionsWTMF}
            onChangeChart={onChangeChart}
          />
        
        </div>
        <div className='filters-container'>
          <FiltersTime isHidden={sectionVisible}  onFilter={getTasksReq} />
          <Members isHidden={sectionVisible} onFilter={getTasksWthMembrsInfo}/>
          {
            tasksRelevantInfo?.total_incidents_open && sectionVisible == 'filters'
            ?
            <IncidentsSummaryMain 
              incidentsOpen={tasksRelevantInfo?.total_incidents_open} 
              incidentsClosed={tasksRelevantInfo?.total_incidents_closed}
            />
            : !tasksRelevantInfo?.total_incidents_open && sectionVisible == 'filters' 
              ? <LoadingWhite />
              : ''
          }
        </div>
      </section>
    </>
  )
}

export default TicketingApp

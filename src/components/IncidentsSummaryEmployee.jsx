import { Filter } from './Filter';

const timeFilter = {
  tittle: 'Time',
  dataSelects: ['This month', 'This week', 'Last month', 'Last week'],
  action: () => {}
}

export const IncidentsSummaryEmployee = () => {
  return (
    <div className="incidents-summary">
        <Filter 
            tittle={timeFilter.tittle} 
            dataSelects={timeFilter.dataSelects} 
            action={timeFilter.action} 
        />
        <p>Total Incidents Assigned: XXXXXX</p>
        <hr  />
        <p>Total Incidents Closed: XXXXXX</p>
        <hr />
        <p>Total Incidents Non-Closed: XXXXXX</p>
    </div>
  )
}

import { FilterTimeAssignee } from "../filters/FilterTimeAssignee"

export const IncidentsSummaryEmployee = ({incidentsOpen, incidentsClosed, incidentsClosedByH,filterChange, memberId}) => {
  return (
    <div className="incidents-summary">
        <FilterTimeAssignee memberId={memberId} filterChange={filterChange}/>

        <p>Total Incidents Assigned: {incidentsOpen+incidentsClosed}</p>
        <hr  />
        <p>Total Incidents Assigned Non-Closed: {incidentsOpen}</p>
        <hr />
        <p>Total Incidents Assigned Closed: {incidentsClosed}</p>
        <hr />
        <p>Total Incidents Closed By Historial: {incidentsClosedByH.totalClosedH }</p>
    </div>
  )
}

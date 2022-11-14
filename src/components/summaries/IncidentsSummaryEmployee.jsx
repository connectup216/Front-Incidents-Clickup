import { FilterTimeAssignee } from "../filters/FilterTimeAssignee"

export const IncidentsSummaryEmployee = ({incidentsOpen, incidentsClosed}) => {
  return (
    <div className="incidents-summary">
        <FilterTimeAssignee/>

        <p>Total Incidents Assigned: {incidentsOpen+incidentsClosed}</p>
        <hr  />
        <p>Total Incidents Non-Closed: {incidentsOpen}</p>
        <hr />
        <p>Total Incidents Closed: {incidentsClosed}</p>
    </div>
  )
}

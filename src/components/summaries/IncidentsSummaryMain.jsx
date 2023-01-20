export const IncidentsSummaryMain = ({incidentsOpen, incidentsClosed}) => {
  return (
    <div className="incidents-summary">
        <h5>Total Incidents Open: <span>{incidentsOpen}</span> </h5>
        <h5>Total Incidents Closed: <span>{incidentsClosed}</span> </h5>
    </div>
  )
}

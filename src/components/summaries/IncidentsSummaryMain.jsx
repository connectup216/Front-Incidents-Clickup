export const IncidentsSummaryMain = ({incidentsOpen,incidentsClosed}) => {
  return (
    <div className="incidents-summary">
        <h5>Total Incidents Open</h5>
        <p>{incidentsOpen}</p>
        <hr  />
        <h5>Total Incidents Closed</h5>
        <p>{incidentsClosed}</p>
    </div>
  )
}

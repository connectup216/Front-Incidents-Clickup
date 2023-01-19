import { FilterTimeAssignee } from "../filters/FilterTimeAssignee"
import { exportChart } from '../../utils/exportChart'

export const IncidentsSummaryEmployee = ({
  incidentsOpen, 
  incidentsClosed, 
  incidentsClosedByH,
  filterChange, 
  memberId,
  chart}) => {

  return (
    <div className="incidents-summary-employee">
        <FilterTimeAssignee memberId={memberId} filterChange={filterChange}/>

        <p className="summary-data-userprofile" >Total Incidents Assigned: <span>{incidentsOpen+incidentsClosed || ''}</span></p>
        <p className="summary-data-userprofile" >Total Incidents Assigned Non-Closed: <span>{incidentsOpen}</span></p>
        <p className="summary-data-userprofile" >Total Incidents Assigned Closed: <span>{incidentsClosed}</span></p>
        <p className="summary-data-userprofile" >Total Incidents Closed By Historial: <span>{incidentsClosedByH?.totalClosedH}</span></p>
        <button onClick={(e) => exportChart(e, chart)} className='userprofile-custom-buttom export-button-userprofile'>Export Chart</button>

    </div>
  )
}

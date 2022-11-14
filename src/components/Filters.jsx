import { Filter } from "./Filter";

const filters = [
    {
        tittle: 'Time',
        dataSelects: ['This month', 'This week', 'Last month', 'Last week'],
        action: () => {}
    },
    {
        tittle: 'Incident Priority',
        dataSelects: ['No prio', 'Normal', 'High', 'Prioritary'],
        action: () => {}
    },
    {
        tittle: 'Incident Status',
        dataSelects: ['Open', 'In progress', 'In review', 'Closed'],
        action: () => {}
    }
]

export const Filters = () => {
  return (
    <>
        <div>
            <h3>Filters</h3>
            <hr />
        </div>
        <div>
            {
                filters.map( filter => 
                    <Filter 
                        key={filter.tittle}
                        tittle={filter.tittle} 
                        dataSelects={filter.dataSelects} 
                        action={filter.action} 
                    />
                )
            }
        </div>
        <div className="incidents-summary">
            <h5>Total Incidents Open</h5>
            <p>XXXXXX</p>
            <hr  />
            <h5>Total Incidents Closed</h5>
            <p>XXXXXX</p>
        </div>
    </>
  )
}

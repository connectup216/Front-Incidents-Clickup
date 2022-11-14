
export const Filter = ({tittle, dataSelects, action}) => {
    
    const makeRequest = () => {
        action();
    }

    return (
        <div className="filter-item">
            <p>{tittle}</p>
            <select className="filter-select" onChange={ makeRequest } name="filterOptions" > 
                {
                    dataSelects?.map( ( option ) => (
                        <option key={option} value={option} > {option} </option>
                    ))
                }
            </select>
        </div>
    )
}

import { getTaskByTime } from "../../helpers/GetTaskByTime";
import { useRef, useState } from "react";

export const Filters = ( {filterChange} ) => {

    const [value, setValue] = useState('')
    const [filtersDisabled, setFiltersDisabled] = useState(false);
    const timeFilter = useRef()

    const makeRequestTime = async ({target}) => {
        setValue(target.value)
        setFiltersDisabled(true)
        const newData = await getTaskByTime(target.value)
        filterChange(newData)
        setFiltersDisabled(false)
    }

  return (
    <>
        <div>
            <h3>Filters</h3>
            <hr />
        </div>
        <div>
            <div className="filter-item">
                <p>Time</p>
                <select ref={timeFilter} className="filter-select" onChange={ makeRequestTime } disabled={filtersDisabled} name="filterOptions" > 
                    <option value='' hidden={true} > Time </option>
                    <option value={'This week'} > This week</option>
                    <option value={'2 Weeks ago'} > 2 Weeks ago</option>
                    <option value={'3 Weeks ago'} > 3 Weeks ago</option>
                    <option value={'This month'} > This month</option>
                    <option value={'2 Months ago'} > 2 Months ago</option>
                    <option value={'3 Months ago'} > 3 Months ago</option>
                </select>
            </div>
        </div>
    </>
  )
}

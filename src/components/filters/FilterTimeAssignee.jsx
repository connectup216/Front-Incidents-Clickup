import { useRef, useState } from "react"

import {getATByTime} from '../../services/GetATByTime'

export const FilterTimeAssignee = ({filterChange, memberId}) => {

  const [dates, setDates] = useState({date_gt:'',date_lt:''})
  const [filtersDisabled, setFiltersDisabled] = useState(false);

  const fromDate = useRef()
  const toDate = useRef()

  const submitFilter = async (event) => {
    event.preventDefault()

    setDates(
      {
      date_gt:fromDate.current.value,
      date_lt: toDate.current.value
      }
    )

    setFiltersDisabled(true)

    const {data, dataHistory} = await getATByTime(
      {
        date_gt:fromDate.current.value,
        date_lt: toDate.current.value, 
        userId: memberId
      }
    )
    filterChange(data, dataHistory)
    setFiltersDisabled(false)
  }


    return (
        <form onSubmit={submitFilter} className='time-filter-assignee-container'>
          <h2>Time Filters</h2>
          <div className="time-filters-container">
            <div className="time-filter-div">
              <label htmlFor="fromDate">From</label><br />
              <input disabled={filtersDisabled} ref={fromDate} type="date" name='fromDate' />
            </div>
            <div className="time-filter-div">
              <label htmlFor="toDate">To</label><br />
              <input disabled={filtersDisabled} ref={toDate} type="date" name='toDate' />
            </div>
          </div>
          <button className="userprofile-custom-buttom" type="submit">Search</button>
        </form>
    )
}

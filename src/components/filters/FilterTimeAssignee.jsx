import { useRef, useState } from "react"

import {getATByTime} from '../../helpers/GetATByTime'

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

    const newData = await getATByTime(
      {
        date_gt:fromDate.current.value,
        date_lt: toDate.current.value, 
        userId: memberId
      }
    )
    filterChange(newData)
    setFiltersDisabled(false)
  }


    return (
        <form onSubmit={submitFilter} className='time-filter-assignee-container'>
          <div>
            <label htmlFor="fromDate">From</label><br />
            <input disabled={filtersDisabled} ref={fromDate} className='input-date-filter-assignee' type="date" name='fromDate' />
          </div>
          <div>
            <label htmlFor="toDate">To</label><br />
            <input disabled={filtersDisabled} ref={toDate} className='input-date-filter-assignee' type="date" name='toDate' />
          </div>
          <button type="submit"> {">>"} </button>
        </form>
    )
}

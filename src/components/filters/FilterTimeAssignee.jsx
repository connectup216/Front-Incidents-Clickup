
export const FilterTimeAssignee = () => {
    return (
        <form className='time-filter-assignee-container'>
          <div>
            <label htmlFor="fromDate">From</label><br />
            <input className='input-date-filter-assignee' type="date" name='fromDate' />
          </div>
          <div>
            <label htmlFor="toDate">To</label><br />
            <input className='input-date-filter-assignee' type="date" name='toDate' />
          </div>
          <button type="submit"> {">>"} </button>
        </form>
    )
}

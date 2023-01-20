import { useEffect, useState, useRef } from "react"
import { IoIosArrowBack } from "react-icons/io"

export const FiltersTime = ({ onFilter, isHidden }) => {

    const [fromDateFilter, setFromDateFilter] = useState('none')
    const [toDateFilter, setToDateFilter] = useState('none')
    const [showFilters, setShowFilters] = useState(false)

    const onShowFilters = () => setShowFilters(!showFilters)
    const filtersDropdown = useRef(null)
    
    useEffect(() => {
        if(showFilters){
            filtersDropdown.current.style.display = 'flex'
            setTimeout(() => {
                filtersDropdown.current.style.opacity = '100%'
            }, 250)
        }else{
            filtersDropdown.current.style.opacity = '0%'
            setTimeout(() => {
                filtersDropdown.current.style.display = 'none'
            }, 250)
        }
    }, [showFilters])

    let rotation = showFilters ? 'rotate(270deg)' : 'rotate(180deg)'

    const onFromDate = ({target}) => {
        setFromDateFilter(target.value)
    }

    const onToDate = ({target}) => {
        setToDateFilter(target.value)
    }

    useEffect(() => {
        onFilter(fromDateFilter, toDateFilter)
    }, [fromDateFilter, toDateFilter])

    return (
        <div className={isHidden!=='filters' ? 'hidden' : ''}>
            <div className="dropdown-section-container">
                <h3>Time Filters</h3>
                <IoIosArrowBack onClick={onShowFilters} size={40} style={{transform: rotation }}  />
            </div>
            <div ref={filtersDropdown} className="dropdown-body">
                <div className="time-filter-container-main-screen" >
                    <label htmlFor="fromDate">From</label>
                    <input type="date" name='fromDate' onChange={onFromDate} value={fromDateFilter} />
                </div>
                <div className="time-filter-container-main-screen" >
                    <label htmlFor="toDate">To</label>
                    <input type="date" name='toDate' onChange={onToDate} value={toDateFilter} />
                </div>
            </div>
        </div>
    )
}

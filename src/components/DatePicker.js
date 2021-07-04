import React, { useState } from 'react'
import "../../node_modules/react-date-range/dist/styles.css"; // main style file
import '../../node_modules/react-date-range/dist/theme/default.css'
import { DateRangePicker } from 'react-date-range'

import { useHistory } from 'react-router-dom'

const DatePicker = () => {
    const history = useHistory();
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
    };
    
    function handleSelect(ranges) {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    return (
        <div className='datepicker d-flex justify-content-center position-relative' style={{zIndex:'5'}} >
           <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} /> 
        </div>
    )
}

export default DatePicker
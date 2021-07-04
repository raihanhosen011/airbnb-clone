import React from 'react'
import SingleGuest from './SingleGuest'

const Guests = () => {
    return (
        <div className='guests w-50 mx-auto p-4 position-relative bg-white' >
          <SingleGuest year='Adults' age='Age 13 or above ?' />
          <SingleGuest year='Children' age='age 1 - 12'/>
          <SingleGuest year='Infants' age='under 2'/>
        </div>
    )
}

export default Guests

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import DatePicker from './DatePicker';
import Guests from './Guests';

const Bennar = () => {
    const [date,setDate] = useState(false)
    const [guest,setGuest] = useState(false)
    const history = useHistory()

    const ShowDate = () => {
       setDate(!date)
       setGuest(false)
    }

    return (
        <div className='bennar position-reletive' >
           <div className='px-3 d-flex h-100 max-width align-items-center justify-content-center' >
              
              <div className='position-absolute top-5 w-75' >
                <div className='date__panel mx-auto w-75 py-1 bg-white mb-2 rounded-pill d-flex align-items-center justify-content-between shadow' >
                   
                   <div className='single__panel ps-5 p-2 rounded-pill' >
                      <h5 className='fw-bold mb-0 fs-13' >Location</h5>
                      <span className='fs-14' >Where are you going ?</span>  
                   </div>
                   
                   <div onClick={ShowDate} className='single__panel p-2 rounded-pill' >
                      <h5 className='fw-bold mb-0 fs-13' >Chack in</h5>
                      <span className='fs-14' >{date ? 'Hide date' : 'Add date'}</span>  
                   </div>
                   
                   <div onClick={ShowDate} className='single__panel  p-2 rounded-pill' >
                      <h5 className='fw-bold mb-0 fs-13' >Chack out</h5>
                      <span className='fs-14'>{date ? 'Hide date' : 'Add date'}</span>  
                   </div>

                   <div 
                      onClick={() => {
                         setGuest(!guest) 
                         setDate(false)  }} 
                      className='single__panel ps-4 p-2 rounded-pill' >

                      <h5 className='fw-bold mb-0 fs-13 ' >hello world</h5>
                      <span className='fs-14' >0 guests</span>  
                   </div>

                   <IconButton onClick={() => history.push('/search')} className='bg-tomato me-2' >< SearchIcon className='w-13 text-white' /></IconButton>

                </div>
                {date && <DatePicker/>}
                {guest && <Guests />}
              </div>

              <div className='bennar__info w-50 m-auto mb-5 text-center' >
                 <h5 className='text-white font-bold text-xl pb-3 mb-0' >Airbnb 2021</h5>
                 <h1 className='text-white font-semibold text-4xl lg:text-5xl xl:text-5xl' >Introducing 100+ upgrades across our entire service</h1>  
                 <Button variant="contained" className='bennar__button fw-bold bg-tomato text-white' >I'am flexible</Button>
              </div>  

            </div>  
        </div>
    )
}

export default Bennar
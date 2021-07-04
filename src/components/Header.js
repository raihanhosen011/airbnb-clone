import React, { useState } from "react";
import LanguageIcon from '@material-ui/icons/Language';
import NotesIcon from '@material-ui/icons/Notes';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton'
import "../style/Header.css";

import { useHistory } from 'react-router-dom'

function Header() {
   const [head,setHead] = useState(false)
   const history = useHistory()

   const changeHeader = () => {if (window.scrollY >= 80) { setHead(true)} else {setHead(false)}}
   window.addEventListener('scroll', changeHeader)

  return (
    <>
      <div className={`header ${head && 'bg-white shadow'} `} >
         <div className='max-width p-3 d-flex align-items-center justify-content-between' >
            <img onClick={() => history.push('/')} className='header_logo pointer' src='https://airbnb-clone-abtahinoor.vercel.app/images/airbnb.svg' alt='airbnb logo' width='115px' /> 
        
            <div className='header_middle' >
               <div className={`${head && 'd-none'}`} >
                   <span className='single_btn p-2 px-3 rounded-pill' > Place to stay </span>    
                   <span className='single_btn p-2 px-3 rounded-pill' > Experiences </span>    
                   <span className='single_btn p-2 px-3 rounded-pill' > Online Experiences </span>  
                </div> 
                
                <div className={`${!head && 'd-none'}`} >
                   <div className='ps-3 border rounded-pill d-flex align-items-center justify-content-between' >
                      <input type='text' placeholder='Start your search' className='border-none input' />
                      <IconButton className='bg-tomato' >< SearchIcon className='w-13 color-bl text-white' /></IconButton>
                   </div>
                </div>  
            </div>

            <div className='header_right d-flex align-items-center justify-content-center' >
                <span className='single_btn p-2 px-3 rounded-pill' > Become a host </span>   
                <LanguageIcon className={` mx-2 w-16 ${head ? 'color-bl-500' : 'color'}`} />
                <div className={` d-flex p-2 px-3 rounded-pill hd_bg ms-2 color-bl-500`} >
                   <NotesIcon className='me-1 w-16' />
                   <AccountCircleIcon className='w-16' />
                </div>
            </div>  

         </div> 
      </div>
    </>
  );
}
export default Header;
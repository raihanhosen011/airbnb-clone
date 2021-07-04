import React from 'react'
import LanguageIcon from '@material-ui/icons/Language';

function Footer() {
    return (
        <div className='footer grey mt-3' >
           <div className='max-width px-3 d-flex align-items-center justify-content-between py-3' >
              <div className='left' >
                © {new Date().getFullYear()} Airbnb, Inc. · Privacy · Terms · Sitemap
                </div> 
              <div className='right d-flex' >
                <LanguageIcon/> <span className='fw-bold ms-2' >English</span>  
                <span className='fw-bold ms-4' >$ USD</span>  
               </div>             
            </div> 

        </div>  
    )
}

export default Footer

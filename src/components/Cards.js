import { Button } from '@material-ui/core'
import React from 'react'
import { Data } from '../Data'

function Cards() {
    return (
        <div className='cards py-4 max-width px-3' >
           <h3 className='mb-3 fw-bold' >Live anywhere</h3> 
           
           <div className='d-flex' >
           {Data.slice(0,3).map(({id,title,img}) => 
                  <div key={id}  className='single_card m-3' >
                     <div className='single_card_img overflow-hidden shadow' >
                        <img src={img} alt='...' className='w-100 h-100' /> 
                     </div>
                     <h5 className='my-2 text-center' >{title}</h5>
                  </div> 
             )} 
            </div>

            <div className='card__bennar w-100 overflow-hidden position-relative shadow single_card_img' >
               <img src='https://a0.muscache.com/im/pictures/38100f6a-9a35-45b8-a503-cfe384d953b5.jpg?im_w=960' className='w-100 h-100' /> 
               
               <div className='card_bennar_info position-absolute' >
                 <h1 className='fw-bold mb-0' >The Greatest Outdoors</h1>   
                 <h5>Wishlists curated by Airbnb</h5>
                 <Button className='p-2 bg-secondary text-white px-3' > Get Inspire </Button>
               </div>

            </div>

            <h3 className='mt-5 fw-bold' >Discover Experiences</h3> 
            <h5>Unique activities with local experts—in person or online.</h5> 
           
           <div className='d-flex' >
           {Data.slice(3,6).map(({id,title,img}) => 
                  <div key={id}  className='single_card m-3' >
                     <div className='single_card_img overflow-hidden shadow' >
                        <img src={img} alt='...' className='w-100 h-100' /> 
                     </div>
                     <h5 className='my-2 text-center' >{title}</h5>
                  </div> 
             )} 
            </div>

            
            <div className='card__bennar w-100 overflow-hidden position-relative shadow single_card_img' >
               <img src='https://i.ibb.co/YRmwgBt/b.jpg' className='w-100 h-100' /> 
               
               <div className='card_bennar_info text-white position-absolute' >
                 <h1 className='fw-bold mb-0' >Become a Host</h1>   
                 <h5>Wishlists curated by Airbnb</h5>
                 <Button className='p-2 mt-1 bg-white fw-bold px-3' > Get Inspire </Button>
               </div>

            </div>

        </div>
    )
}

export default Cards  
import { Button } from '@material-ui/core'
import React from 'react'
import '../style/Search.css'
import SingleSearch from '../components/SingleSearch';

import { SearchCard } from '../Data'

function SearchResult() {
    return (
        <div className='search max-width px-3' >
           <div className='search__info border-bottom pb-3' >
              <p className='mb-0' >300+ stays · Jun 19 - 25 · 2 guests</p>
              <h2 className='fw-bold' >Stays in selected map area</h2>

              <div className='search_select_option' >
                <Button variant="outlined" className='rounded-pill me-2 fs-13'>Cancellation Flexibility</Button>
                <Button variant="outlined" className='rounded-pill me-2 fs-13'>Type of place</Button>
                <Button variant="outlined" className='rounded-pill me-2 fs-13'>Price</Button>
                <Button variant="outlined" className='rounded-pill me-2 fs-13'>More filters</Button> 
              </div>  

           </div> 

           <div className='search__result my-3' >

               {SearchCard.map(({img,title,price,location}) => <SingleSearch img={img} title={title} price={price} location={location} />  )} 

           </div>
        </div>
    )
}

export default SearchResult

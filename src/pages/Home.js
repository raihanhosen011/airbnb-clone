import React from 'react'
import Bennar from '../components/Bennar'
import Cards from '../components/Cards'
import '../style/Home.css'

const Home = () => {
    return (
        <div className='home' >
           <Bennar/>
           <Cards/>
        </div>
    )
}

export default Home
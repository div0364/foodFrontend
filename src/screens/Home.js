import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Cards from '../components/Cards'
import Carousal from '../components/Carousal'


export default function () {
    return (
        <div>
            <div><Navbar /></div>
            <div><Carousal/></div>
            <div className='card'>
            <div><Cards/></div>
           
            
            
            </div>
            
            <div><Footer /></div>
        </div>
    )
}

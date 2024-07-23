import React from 'react'
import paytm from './Assests/paytm (1).png'
import ola from './Assests/ola.png'
import uber from './Assests/Uber Technologies New 2021.png'
import hp from './Assests/Hewlett-Packard-Logo.wine.png'
import zomato from './Assests/256px-Zomato_logo.png'
import Lamborgini from './Assests/pngimg.com - lamborghini_PNG10709.png'
import phonepay from './Assests/phonepe-icon.png'
const Service = () => {
    return (
    <div className = 'md:px-14 px-4 py-16 max-w-screen-2xl mx-auto' id='service'>
        <div className = 'text-center my-8'>
        <h2 className = 'text-4xl text-gray-800 font-semibold mb-2'>Our clients</h2>
        <p className = 'text-gray-800'>we have been working with some fortune 100+ clients</p>
        </div>
        <div className = 'my-12 flex flex-wrap jusitfy-between items-center gap-20'>
            <img src = {paytm} alt="phonepay" className = 'w-24'/> 
            <img src = {ola} alt="ola" className = 'w-24'/>
            <img src = {uber} alt="uber" className = 'w-24'/>
            <img src = {Lamborgini} alt="car" className = 'w-20'/>
            <img src = {hp} alt="hp" className = 'w-24'/>
            <img src = {zomato} alt="zomato" className = 'w-20'/>
            <img src = {phonepay} alt="phonepay" className = 'w-20'/>
        </div>

        </div>

    )
}

export default Service
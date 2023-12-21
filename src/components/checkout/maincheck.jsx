import React from 'react'
import Subtotal from './subtotal'
import './checkout.css'
import CheckoutMe from './checkoutme'
import { useGlobalContext } from '../context/context'

export default function Maincheck() {
  const [{basket},dispatch]=useGlobalContext()




  return (
    <div className='coverall-checkout'>
                <div className='main-product'>
{
    basket.map((value)=>{
       
       return <CheckoutMe
       key={value.id} {...value}
       />


    })
}
        </div>

        <div className='container-subtotal'>
            <Subtotal/>
        </div>
    </div>
  )
}

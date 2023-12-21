import React from 'react'
import './mainbody.css'
import {useGlobalContext} from '../context/context'
export default function Mainbody
({id,price,images,name}) {
const [{basket},dispatch]=useGlobalContext()

  const addToCart=()=>{
    dispatch({
      type:'ADDTOCART',
      item:{
        id:id,
        price:price,
        images:images,
        name:name
      }
    })
  }


  return (
    <div className='covereach-item' key={id}>
     

        <div className='images'>
            <img src={images} alt={name}/>
            </div>
            <div className='content'>
                <h3>{name}</h3>
                <p>$ {price}</p>
                <button onClick={addToCart}>add to cart</button>
                </div>

    </div>
  )
}

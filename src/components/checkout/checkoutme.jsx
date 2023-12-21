import React from 'react'
import {useGlobalContext} from '../context/context'

export default function CheckoutMe({id,images,name,price}) {
    const [{basket,user},dispatch]=useGlobalContext()

    const removeBasket=()=>{
dispatch({
    type:'DELETEBASKET',
    id:id,
})
    }
    
  return (
    <div >
        <h1> {user?.name}</h1>
        <img src={images} alt={name}/>
<div className='content'>
    <h2>{name}</h2>
    <h3>{price}</h3>
    <button onClick={removeBasket}>remove</button>
</div>
    </div>
  )
}

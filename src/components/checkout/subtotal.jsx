import React from 'react'
import { useGlobalContext } from '../context/context'
import {getTotalPrice} from '../reducer/reducer'
import {Link} from 'react-router-dom'
export default function Subtotal() {
const [{basket},dispatch]=useGlobalContext()
  return (
    <div>
      <p> price:$ {getTotalPrice(basket)}</p>
<h2>subtotal : {basket.length}</h2>
<Link to='/payment'>
<button>proceed to checkout</button>
</Link>
    </div>
  )
}

import React,{useState,useEffect} from 'react'
import {useGlobalContext} from '../context/context'
import CheckoutMe from '../checkout/checkoutme'
import {CardElement,useStripe,useElements} from '@stripe/react-stripe-js'
import {getTotalPrice} from '../reducer/reducer'
import { useNavigate } from 'react-router-dom'
import axios from '../axios/axios'
export default function Payment() {
  const [{basket,user},dispatch]=useGlobalContext()

const navigate=useNavigate()
  
  const stripe=useStripe()
  const element=useElements()

const [succeeded,setSucceeded]=useState(false)
const [processing,setProcessing]=useState('')
const [error,setError]=useState(null)
const [disabled,setDisabled]=useState(true)
const [clientSecret,setClientSecret]=useState(true)


useEffect(()=>{
const getClientSecret=async ()=>{
  const res=await axios({
    method:'POST',
    url:`/payments/create?total=${getTotalPrice(basket)*100}`
  })
  setClientSecret(res.data.clientSecret)
}

getClientSecret()
},[basket])

  const handleSubmit=async(e)=>{
e.preventDefault()

setProcessing(true)
const payload=await stripe.confirmCardPayment(clientSecret,{
  payment_method:{
    card:element.getElement(CardElement)
  }
}).then(({paymentIntent})=>{
  setSucceeded(true)
  setError(null)
  setProcessing(false)

  navigate('/orders')
})

  }

  const handleChange=(e)=>{
setDisabled(e.empty);
setError(e.error?e.error.message:'')
  }

  return (
    <div>
      <div className='coverall-payment'>
        <h1>checkout ({basket.length})</h1>
<div className='upper-checkout'>
<h2>hello {user?.email}</h2>
<h2>ojongbodu housing estate</h2>
<p>lane 3 iseyin road</p>
</div>

<div className='middle-checkout'>
<div className='main-product'>
{
    basket.map((value)=>{
       
       return <CheckoutMe
       key={value.id} {...value}
       />


    })
}
</div>
</div>


<div className='mainpayment-bottom'>
  <form onSubmit={handleSubmit}>
  <CardElement onChange={handleChange}/>

  <div>
    <h3> price:::{getTotalPrice(basket)}</h3>
    <button disabled={processing||disabled||succeeded}>
      <span>{processing?<p>processing</p>:'buy now'}</span>
      </button>
  </div>
{error && <div>{error}</div>}
  </form>

  </div>


  </div>
    </div>
  )
}

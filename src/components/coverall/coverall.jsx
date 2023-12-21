import React,{useState,useEffect} from 'react'
import Nav from '../nav/nav'
import Body from '../body/body'
import Maincheck from '../checkout/maincheck'
import Login from '../loginpage/login'
import {auth} from '../firebase/firebase'
import {onAuthStateChanged} from 'firebase/auth'
import Payment from '../payment/payment'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import {useGlobalContext} from '../context/context'
import {Elements} from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js'


const promise=loadStripe("pk_test_51O0so0HmN2Js7XqabmV6reV8VxZKu41lBBgX0erwpNoAQKooOWvlmeirGhSt9IzQHDc3kLV2Y4rUnHpOLKuO1Qti00AAUj6zND");
export default function coverall() {

const [{},dispatch]=useGlobalContext()

  useEffect(()=>{
onAuthStateChanged(auth,(authUser)=>{

  if(authUser){
dispatch({
  type:'USERAUTH',
  user:authUser
})
  }
  else{
dispatch({
  type:'USERAUTH',
  user:null
})
  }
})
  },[])
  return (
    <div>
  <Router>   
<Nav/>

 <Routes>
 <Route path='/' exact element={<Body/>}/>
 <Route path='/payment'

  element={
    <Elements stripe={promise}>
    <Payment/>
    </Elements>
    }/>
 
  
 <Route path='/checkout' element={<Maincheck/>}/>
 <Route path='/login' element={<Login/>}/>
 </Routes>


</Router> 



    </div>
  )
}

import React,{useState} from 'react'
import './login.css'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {signInWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../firebase/firebase'
import {Link,useNavigate} from 'react-router-dom'




export default function Login() {
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
const [name,setName]=useState('')
const [error,setError]=useState('')
const [color,setColor]=useState('')
const navigate=useNavigate()

const signIn=(e)=>{
e.preventDefault()
signInWithEmailAndPassword(auth,email,password,name)
.then((credential)=>{
    console.log(credential)

    setError('login success ')
    setColor('green')
    setTimeout(()=>{
        navigate('/')
    },1000)

 
}).catch((err)=>{

    setTimeout(()=>{
        setError('login unsuccessful')
        console.log(err)
setColor('red')
    },1000)

   
})
}

const registerApp=(e)=>{
    e.preventDefault()
   createUserWithEmailAndPassword(auth,email,password,name)
   .then((auth)=>{
    console.log(auth)
    setTimeout(()=>{
        navigate('/')
    },1000)
   })
   .catch((err)=>{
    console.log(err)
    setTimeout(()=>{
        setError('login unsuccessful')
    },1000)
   
})
}

  return (
    <div className='coverall-login'>
        
        <form className='login-me'>
        <h3 style={{textAlign:'center'}}
        className={color}
        >{error}</h3>
<h2 style={{textAlign:'center',marginBottom:'15px',
textTransform:'capitalize'}}>
    <Link to='/'>login in</Link></h2>

    <div className='each-login'>
           <p> <label htmlFor='name'>name::</label></p>
            <input type='text' id='name' name='name' 
            value={name} onChange={(e)=>setName(e.target.value)}/>
            </div>

            <div className='each-login'>
           <p> <label htmlFor='email'>email::</label></p>
            <input type='email' id='email' name='email' 
            value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>

            <div className='each-login'>
           <p><label htmlFor='password'>password::</label></p> 
            <input type='password' id='password' name='password'
            value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <div className='cover-con'>
            <div className='signIn-btn btn'>
                <button onClick={signIn}>sign in</button>
            </div>
            <p className='para'>this is just the ecommerce website that allow you to order 
                products of your type and those products are delivered to
                your doorstep
            </p>
            <div className='register-btn btn'>
                <button onClick={registerApp}>create an account</button>
            </div>

            </div>
        </form>
    </div>
  )
}

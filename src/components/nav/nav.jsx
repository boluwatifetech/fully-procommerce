import React from 'react'
import './nav.css'
import {useGlobalContext} from '../context/context'
import {Link} from 'react-router-dom'
import {auth} from '../firebase/firebase'
import {signOut} from 'firebase/auth'

export default function Nav() {
    const [{basket,user},dispatch]=useGlobalContext()

    const handleAuth=()=>{
        if(user){
signOut(auth)
        }
    }
  return (
    <div className='coverall-nav'>
        <div className='cover-allnav'>
            <Link to='/'>          
             <div className='nav-img'>
                <img src='images/cap14.jpeg'/>
            </div>
            </Link> 
            <div className='search-nav'>
                <input type='text'/>
                <button>search</button>
            </div>
            <div className='remaining-nav'>

                
           <Link to='/login'>
                <div className='single-nav' style={{cursor:'pointer'}} onClick={handleAuth}  >
                   <small>hello {!user?'guest':user.email}</small>
                    <h3 >{user ?'sign out':'sign in'}</h3>
                 </div>
                 </Link>

                <div className='single-nav'>
                    <small>returns</small>
                    <h3>&orders</h3>
                </div>
                <div className='single-nav'>
                    <small>your </small>
                    <h3>prime</h3>
                </div>
                <div className='basket'>
                    <Link to='/checkout' className='link-basket'>
                    <small>basket</small>
                    <h3 style={{cursor:'pointer'}}>
                        {basket.length}</h3>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

import React from 'react'
import Coverall from '../coverall/coverall'
import {StateProvider} from '../context/context'
import reducer,{initialState} from '../reducer/reducer'
export default function Coverapp() {
  return (
    <div>
      <StateProvider  initialState={initialState} reducer={reducer}>
      <Coverall/>
      </StateProvider>
        
    </div>
  )
}

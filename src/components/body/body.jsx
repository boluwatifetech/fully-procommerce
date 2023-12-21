import React,{useState} from 'react'
import {data} from '../data/data'
import Mainbody from '../mainbody/mainbody'
import './body.css'

const allbtn=['all',...new Set(data.map((item)=>item.category))]
console.log(allbtn)
export default function Body() {

 const [item,setItems]=useState(data)
  const [catBtn,setCatBtn]=useState(allbtn)
 
  const filterBtn=(category)=>{
    if(category==='all'){
      setItems(data)
      return;
    }
    const newBtn=data.filter((item)=>item.category!==category)
    setItems(newBtn)

  }

 

  return (
    <div>
    <div className='coverall-items'>
    <div className='btn-container'>
    {
      catBtn.map((itemBtn)=>{
        return(
          <div>
            <button onClick={()=>filterBtn(itemBtn)}>
              {itemBtn}</button>
          </div>
        )
      })
    }
      </div>
      <div className='item-area'>
{
  item.map((items)=>{
return <Mainbody key={items.id} {...items}/>
  })
}
</div>
    </div>
    </div>
  )
}

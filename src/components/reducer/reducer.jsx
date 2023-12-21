export const initialState={
    basket:[],
    user:null
}

export const getTotalPrice=(basket)=>
basket?.reduce((amount,item)=>item.price+
amount,0
)

const reducer=(state,action)=>{
switch(action.type){
    case 'ADDTOCART':
        return{
            ...state,
            basket:[...state.basket,action.item]
        };

        case 'DELETEBASKET':
           const index=state.basket.findIndex((basketItem)=>basketItem.id===action.id)

           let newBasket=[...state.basket];

if(index>=0){
    newBasket.splice(index,1)
}

else{
    console.warn(`can't remove (id:${action.id})`)
}

return{
    ...state,
    basket:newBasket
}

case 'USERAUTH':
    return{
        ...state,
        user:action.user
    }

          default:
            return state 
        
}
}

export default reducer
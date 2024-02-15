import React, { useContext } from 'react'
import { GlobalText } from '../context-api'
import CartImgComponent from './CartImgComponent';

const Cart = () => {
  const {cartData,cost}= useContext(GlobalText);
  return (
    <div>
 
    <div className='cartcontainer'>
      {cartData.length && cartData.length>0 ? cartData.map((element,index)=><CartImgComponent item={element}/>) : (
        <div><p>No Products in your cart</p></div>
        )}
    </div>
    <h1>Total Cost : {cost}</h1>
        </div>
  )
}

export default Cart

import React, { useState } from 'react'
import axios from 'axios';
export default function Product(props) {
    
    const data1 = JSON.parse(localStorage.getItem("data"));
    const user_id = data1.id;
    console.log(user_id)
    const price = props.price
    const product_id = props.id
   
    const handleAddToCart = async(event)=>{
        event.preventDefault();
        const response1 = await axios.post(`http://127.0.0.1:8000/add/${props.id}/${user_id}/`)
            

        
        
        console.log(response1)
    }
    
  return (
    <div className='products' key={props.id}>
      <img src={props.image} alt="" />
      <p>{price}</p>
      <button type='submit' onClick={handleAddToCart}>Add to Cart</button>
    </div>
  )
}

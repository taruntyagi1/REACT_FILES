
import './App.css';
import Main from './components/main';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Product from './components/product';

function App() {
  const [product,setProduct] = useState([])
  const fetchProducts = async()=>{
    const response =  await axios.get('http://127.0.0.1:8000/products/')
    try{
     setProduct(response.data)
    }catch(err){
      console.log(err)
    }
  }
  useEffect(()=>{
    fetchProducts();
  },[]);
  const base_url = 'http://127.0.0.1:8000'
  return (
    <div className="App">
      <Main/>
      <div>
        {product.map(product =>(

      <Product key = {product.id} id = {product.id} title = {product.title} price = {product.price} image = {base_url + product.image}/>
        ))}
      </div>
    </div>
  );
}

export default App;

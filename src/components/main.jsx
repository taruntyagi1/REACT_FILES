import React, { useState } from 'react'
import axios from 'axios'

export default function Main() {
  const [email,setEmail] = useState('')
  const [password,setpassword] =  useState('')
  const [token,setToken] = useState(null)
  
  const handleSubmit = async(e) => {
    // Prevent the default submit and page reload
    e.preventDefault()

    // Handle validations
    const response = await axios.post('http://127.0.0.1:8000/login_view/',{
      email,password
    })
    
    const data = JSON.stringify(response.data)
    localStorage.setItem('data' , data)
    const data1 = JSON.parse(localStorage.getItem("data"));
    const id = data1.id;
    console.log(id)
     
  }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
      <input type="email"
            name="email"
            id="email" value={email} onChange = {event=>{
        setEmail(event.target.value)
        console.log(event.target.value)
      }} />
      <input  type="password"
            name="password"
            id="password" value={password} autoComplete = {password} onChange = {event=>{
        setpassword(event.target.value)
      }} />
       <input type="submit" value="Login" />
      </form>
    </div>
  )
}

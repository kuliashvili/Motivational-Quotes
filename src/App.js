import React, { useState } from 'react'
import { useEffect } from 'react'
import  axios from 'axios'
import './App.css'


export default function App() {
 const [quote, setQuote] = useState('')

 const getQuote = () => {
    axios.get('https://api.quotable.io/random')
    .then(response => {
      // console.log(response)
      // console.log(response.data.content)
      setQuote(response.data.content)
    }).catch(error =>{
      console.log(error)
    })
 }
  return (
    <div className='app'>
      <div className="container">

     
      {quote ? <p className='quote'>{quote}</p> : null}
      <button onClick={getQuote}>Get Quote</button>

      </div>
    </div>
  )
}

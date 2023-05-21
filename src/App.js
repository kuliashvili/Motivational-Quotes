import React, { useState } from 'react'
import { useEffect } from 'react'
import  axios from 'axios'


export default function App() {
 const [quote, setQuote] = useState('')

 const getQuote = () => {
    axios.get('https://api.quotable.io/random')
    .then(response => {
      console.log(response)
      console.log(response.data.content)
      setQuote(response.data.content)
    }).catch(error =>{
      console.log(error)
    })
 }
  return (
    <>
   <button onClick={getQuote}>Get Quote</button>
   {quote ? <p>{quote}</p> : null}
    
    </>
  )
}

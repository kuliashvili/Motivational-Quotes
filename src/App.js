import React, { useState } from 'react'
import { useEffect } from 'react'


export default function App() {
 const [records, setRecords] = useState([])

useEffect(()=> {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => setRecords(data))
  .catch(err => console.log(err))
}, [])

  return (
    <>
    <h1>bum</h1>
    <ul>
      {records.map((list, index)=> (
        <li key={index}>{list.email}</li>
      ))}
    </ul>
    
    </>
  )
}

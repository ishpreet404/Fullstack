import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"
import { useEffect } from 'react'
function App() {
  const [quotes, setquotes] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3000/api/quotes')
      .then((response) => {
        setquotes(response.data);
      })
    .catch ((error) => {
      console.log(error);
      
    }) 
    
  }, [])
  console.log(quotes);
  
  return (
    <>
      <h1>Fullstack testing</h1>
      {
        quotes.map((quotes) => (
          <div>
            <h1>{quotes.quote}</h1>
            <p>{ quotes.author}</p>
          </div>
        ))
      }
    </>
  )
}

export default App

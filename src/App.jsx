import { useState } from 'react'
import './App.css'
import Hero from "./components/hero";
import Header from './components/header'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
    <Hero/>
    </>
  )
}

export default App

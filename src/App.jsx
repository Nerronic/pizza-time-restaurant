import { useState } from 'react'
import './App.css'
import Hero from "./components/hero";
import Header from './components/header'
import Nav from "./components/nav"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav/>
     <Header/>
    <Hero/>
    </>
  )
}

export default App

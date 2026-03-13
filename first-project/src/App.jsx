import About from './About.jsx'
import About2 from './About2.jsx'
import About3 from './About3.jsx'
import React from 'react'
import './App.css'

const App = () => {
  return (
    <div className="body">
      <div className="head"><h1 >Our Product</h1></div>
      <div className="items">
      <About />
      <About2 />
      <About3 />
    </div></div>
  )
}

export default App

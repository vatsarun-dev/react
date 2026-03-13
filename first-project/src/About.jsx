import React from 'react'
import './About.css'
import image from './assets/image.png'
const About = () => {
  return (
    <div className="card"> 
    <div className="img">
      <img src={image} alt="hello" />
</div>
<div className="dets">
<h1>WireLess HeadPhone</h1>
<h5>Electronics</h5>
<h4>₹1999</h4>
<button>Add to Cart</button>
    </div>
</div>
  )
}

export default About

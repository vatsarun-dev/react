import React from 'react'
import './About2.css'
import image from './assets/image2.png'
const About2 = () => {
  return (
    <div className="card"> 
    <div className="img"><img src={image}/></div>
<div className="dets">
<h1>Smart Watch</h1>
<h5>Gadgets</h5>
<h4>₹2999</h4>
<button>Add to Cart</button>
    </div>
</div>
)
}

export default About2

import React from 'react'
import './About3.css'
import image from './assets/image3.png'
const About3 = () => {
  return (
    <div className="card"> 
    <div className="img">
      <img src={image} alt="hello" />
</div>
<div className="dets">
<h1>Sports Shoes</h1>
<h5>Fashion</h5>
<h4>₹2999</h4>
<button>Add to Cart</button>
    </div>
</div>
  )
}

export default About3

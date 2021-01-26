import React from 'react'
import classes from "./slider.module.css"

const Slider = () => {
  
  return (

    <div className={classes.wrapper}>
    <input type="radio" name="point" id="slide1" checked/>
    <input type="radio" name="point" id="slide2"/>
    <input type="radio" name="point" id="slide3"/>
    <input type="radio" name="point" id="slide4"/>
    <input type="radio" name="point" id="slide5"/>
    <div className={classes.slider}>
      <div class="slides slide1"></div>
      <div class="slides slide2"></div>
      <div class="slides slide3"></div>
      <div class="slides slide4"></div>
      <div class="slides slide5"></div>
    </div>	
    <div className={classes.controls}>
      <label for="slide1"></label>
      <label for="slide2"></label>
      <label for="slide3"></label>
      <label for="slide4"></label>
      <label for="slide5"></label>
    </div>
  </div>
  
  )
}

export default Slider

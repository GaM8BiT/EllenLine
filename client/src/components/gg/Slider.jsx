import React from 'react'
import classes from "./main.module.css"
import slideShow from "./main.js"
const Slider = () => {
  slideShow(classes.slider,{isAutoplay: true})
  return (

  <div className={classes.slider}>
    <div className={classes.slider__wrapper}>
      <div className={classes.slider__items}>
        <div className={classes.slider__item}>
          <div style={{height: "250px", background: "orange"}}></div>
        </div>
        <div className={classes.slider__item}>
          <div style={{height: "250px", background: "green"}}></div>
        </div>
        <div className={classes.slider__item}>
          <div style={{height: "250px", background: "violet"}}></div>
        </div>
        <div className={classes.slider__item}>
          <div style={{height: "250px", background: "coral"}}></div>
        </div>
      </div>
    </div>
    <div>
    <a className={classes.slider__control + ' ' + classes.slider__control_prev} href="#" role="button"></a>
    <a className={classes.slider__control + ' ' + classes.slider__control_next + ' ' + classes.slider__control_show} href="#" role="button"></a>
    </div>
    
  </div>
  
  )
}

export default Slider

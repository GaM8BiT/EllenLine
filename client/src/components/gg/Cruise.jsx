import React from 'react'
import classes from "./Cruise.module.css"
import PresentationMap from '../Common/Map/PresentationMap'
import Slider from './Slider'

function Map() {

    //const [data, setData] = useState({advantages: [], services: []});
    const homeOnMap= [{coordinates: [44.3973,33.9395], hintContent: 'Mriya Resort & SPA', balloonContentBody: 'с. Оползневое, улица Генерала Острякова, 9'}];
    const cityCoordinates = [44.3973,33.9395];
    return (
        <div className={classes.main}>
          {/* <PresentationMap className={ classes.footer__map } id="map" cityCoordinates={cityCoordinates} points={homeOnMap}/> */}
          <Slider/>
        </div>
    )
}
export default Map
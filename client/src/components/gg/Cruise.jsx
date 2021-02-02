import React from 'react'
import classes from "./Cruise.module.css"

function App() {
    return (
    <div className={classes.App}>
            <div className={classes.app_wrapper}>
                <div className={classes.main}>
                    <div className={classes.sidebar}>
                        <p><h3>Количеcтво пересадок</h3></p>
                        <form>
                            <label>
                                <input type="checkbox" className={classes.input}/>
                                <span className={classes.checker}>
                                    <p>Все</p>
                                </span>
                            </label>
                            <label>
                                <input type="checkbox" className={classes.input}/>
                                <span className={classes.checker}>
                                    <p>Без пересадок</p>
                                </span>
                            </label>
                            <label>
                                <input type="checkbox" className={classes.input}/>
                                <span className={classes.checker}>
                                    <p>1 пересадка</p>
                                </span>
                            </label>
                            <label>
                                <input type="checkbox" className={classes.input}/>
                                <span className={classes.checker}>
                                    <p>2 пересадки</p>
                                </span>
                            </label>
                            <label>
                                <input type="checkbox" className={classes.input}/>
                                <span className={classes.checker}>
                                    <p>3 пересадки</p>
                                </span>
                            </label>
                        </form>
                    </div>
                    <div className={classes.filter}>

                    <div className={classes.filter_low_Price + ' ' + classes.filter_element}>Самый дешевый</div>
                    <div className={classes.filter_faster_Price + ' ' + classes.filter_element}>Самый быстрый</div>

                    </div>
                    <div className={classes.tickets}>3 слот</div>
                </div>
            </div>
    </div>);
    
}
export default App
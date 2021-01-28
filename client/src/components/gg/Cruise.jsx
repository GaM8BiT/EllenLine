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
                                    <p>Без пересадок</p>
                                    <p>1 пересадка</p>
                                    <p>2 пересадки</p>
                                    <p>3 пересадки</p>
                                </span>
                            </label>
                        </form>
                    </div>
                    <div className={classes.filter}>2 слот</div>
                    <div className={classes.tickets}>3 слот</div>
                </div>
            </div>
    </div>);
    
}
export default App
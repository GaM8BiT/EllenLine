import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/Home/Home.jsx';
import Relax from './components/Relax/Relax';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/Common/Header/Header';
import Footer from './components/Common/Footer/Footer';
import FormDBChange from './components/Admin/FormDBChange/FormDBChange';
import AdminHeader from './components/Common/Header/AdminHeader'
import Cruise from "./components/gg/Cruise";

const simpleComponent = Сomponent => props =>{
   
  return (
    <div>
      <Header/>
        <Сomponent {...props}/>
      <Footer/>
    </div>
  )
  
}
const adminComponent = Сomponent => props => {
  return (
    <div>
      <AdminHeader/>
      <Сomponent {...props}/>
    </div>
  )
  
}

ReactDOM.render((
  <Router>
      <Route exact path='/' component={simpleComponent(Home)}/>
      <Route exact path='/relax' component={simpleComponent(Relax)}/>
      <Route exact path='/gg' component={simpleComponent(Cruise)}/>
      <Route path='/admin/:sector?/:category?' component={adminComponent(FormDBChange)}/>
      {/* <Route exact path='/admin/db' component={adminComponent(FormDBChange)}/> */}
  </Router>
  ), document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

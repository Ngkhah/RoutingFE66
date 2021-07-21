import React, { useEffect } from 'react'
import Home from './Pages/Home/Home';
import HomeHeader from './Components/HomeHeader/HomeHeader';

//Cấu hình route
import { BrowserRouter, Route,Switch } from 'react-router-dom';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
// import Login from './Pages/Login/Login';
import Profile from './Pages/Profile/Profile';
import UseStateDemo from './Pages/_Hooks/UseStateDemo/UseStateDemo';
import DemoUseEffect from './Pages/_Hooks/DemoUseEffect/DemoUseEffect';
import ApiReactClass from './Pages/DemoApi/ApiReactClass';
import ApiFunction from './Pages/DemoApi/ApiFunction';
import DemoHookRedux from './Pages/_Hooks/HookRedux/DemoHookRedux';
import BookingTicket from './BookingTicket/BookingTicket';

import LoginFormik from './Pages/Login/LoginFormik';
import Details from './Pages/Details/Details';
import OanTuTi from './_OanTuTi/OanTuTi';

export default function App() {
  return (
    <BrowserRouter>
      <HomeHeader />
      <Switch>
        <Route exact path='/home' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/loginformik' component={LoginFormik} />
        {/* <Route exact path='/login' component={Login} /> */}

        <Route exact path='/profile' component={Profile} />
        <Route exact path='/usestate' component={UseStateDemo} />
        <Route exact path='/useeffect' component={DemoUseEffect} />


        <Route exact path='/demohookredux' component={DemoHookRedux} />

        <Route exact path='/apiclass' component={ApiReactClass} />


        <Route exact path='/apifunction' component={ApiFunction} />
        <Route exact path='/bookingticket' component={BookingTicket} />
        <Route exact path='/oantuti' component={OanTuTi} />

        <Route exact path='/detail/:id' component={Details} />



        <Route exact path='/' component={Home} />
      </Switch>


    </BrowserRouter>
  )
}

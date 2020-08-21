import React, { useState, useEffect } from "react";
import { Link, Route, Switch } from 'react-router-dom'
import Form from './Form'
import HomePage from './HomePage'
import OrderStatus from './OrderStatus'
import formSchema from './validation/formSchema'
import axios from 'axios'
import * as yup from 'yup'

const App = () => {
  return (
    <div className = 'App'>
      <div class= 'nav-container'>
        <h1>Lambda Eats</h1>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/Form'>Order Form</Link>
          <Link to='/OrderStatus'>Order Status</Link>
        </nav>
      </div>
      <Switch>
        <Route path='/OrderStatus'>
          <OrderStatus/>
        </Route>
        <Route path='/Form'>
          <Form/>
        </Route>
        <Route path='/'>
          <HomePage/>
        </Route>
      </Switch>
    </div>
  );
};
export default App;

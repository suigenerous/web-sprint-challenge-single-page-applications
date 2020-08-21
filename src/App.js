import React, { useState, useEffect } from "react";
import { Link, Route, Switch } from 'react-router-dom'
import Form from './Form'
import HomePage from './HomePage'
import OrderStatus from './OrderStatus'
import formSchema from './validation/formSchema'
import axios from 'axios'
import * as yup from 'yup'

const initialFormValues = {
  name: '',
  pizzaSize: '',
  toppings: {
    pepperoni: false,
    sausage: false,
    olives: false,
    jalapenos: false,
  },
  specialInstructions: ''
}

const initialFormErrors = {
  name: ''
}

const initialOrders = []
const initialDisabled = true

const App = () => {

  // set states

  const [orders, setOrders] = useState(initialOrders)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled) 

  // networking helpers

  const getOrders = () =>{
    // axios call to back end 
  }

  const postNewOrder = (newOrder) => {
    // axios post to backend
    console.log(newOrder)
  }
  // form helpers

  const inputChange = (name, value) => {
    setFormValues({...formValues, [name]: value})
  }

  const checkboxChange = (name, isChecked) => {
    setFormValues({...formValues, toppings: {...formValues.toppings, [name]: isChecked,}})
  }

  const submit = () => {
    const newOrder = {
      name: formValues.name,
      pizzaSize: formValues.pizzaSize,
      toppings: Object.keys(formValues.toppings).filter(top => formValues.hobbies[top]),
    }
    postNewOrder(newOrder)
  }

  return (
    <div className = 'App'>
      <div className= 'nav-container'>
        <h1>Lambda Eats</h1>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/Form'>Order Form</Link>
          <Link to='/OrderStatus'>Order Status</Link>
        </nav>
      </div>
      <Switch>
        <Route path='/OrderStatus'>
          <OrderStatus
            orders = {orders}
          />
        </Route>
        <Route path='/Form'>
          <Form
            values={formValues}
            inputChange={inputChange}
            checkboxChange={checkboxChange}
            submit={submit}
            disabled={disabled}
            errors={formErrors}
          />
        </Route>
        <Route path='/'>
          <HomePage/>
        </Route>
      </Switch>
    </div>
  );
};
export default App;

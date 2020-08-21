import React from "react";

export default function Form(props) {
    // props

    const {
        values,
        inputChange,
        checkboxChange,
        submit,
        disabled,
        errors,
    } = props
    //helper functions

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }
    const onCheckboxChange = evt => {
        const { name, checked } = evt.target
        checkboxChange(name, checked)
      }
    
      const onInputChange = evt => {
        const { name, value } = evt.target
        inputChange(name, value)
      }

    // JSX

    return (
        <div className = 'formContainer' onSubmit={onSubmit}>
            <h2>Form</h2>
            <div className='form-group submit'>
                <h3>Add an Order</h3>

                <button disabled={disabled}>submit order</button>

                <div className='errors'>
                    <div>{errors.username}</div>
                    <div>{errors.email}</div>
                    <div>{errors.role}</div>
                    <div>{errors.civil}</div>
                </div>
            </div>
            <div className = 'form-inputs'>
                {/* order name text input*/}
                <label>Name&nbsp;
                    <input
                        value = {values.name}
                        onChange = {onInputChange}
                        name = 'name'
                        type = 'text'
                    />
                </label>
                {/* pizza size drop down */}
                <label>Pizza Size&nbsp;
                    <select
                        value={values.pizzaSize}
                        onChange={onInputChange}
                        name='pizzaSize'
                    >
                        <option value=''>- Select an option -</option>
                        <option value='14'>14"</option>
                        <option value='16'>16"</option>
                        <option value='18'>18"</option>
                    </select>
                </label>
            </div>

        </div>
    )
}
import React from 'react'
import { Form } from "react-router-dom";

function FormPage() {
  return (
    <>
        <div>
            <h1>Sumbit Form</h1>

            <Form method='post'>
                <div>
                    <label>Name:</label>
                    <input type="text" name='name' required/>
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name='email' required/>
                </div>
                <button type='submit'>Submit</button>
            </Form>
        </div>
    </>
  )
}

export default FormPage
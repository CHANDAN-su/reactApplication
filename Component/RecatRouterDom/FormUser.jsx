import React from 'react'
import { Form, useActionData } from "react-router-dom";

function FormUser() {

    const actionData = useActionData();
  return (
    <>
        <div>
            <h1>User Form</h1>

            <Form method='post'>
                <div>
                    <label>Name:</label>
                    <input type="text" name='name' required />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name='email' required />
                </div>
                <button type='submit'>Submit</button>
            </Form>
        </div>

        {actionData && <p>{actionData.message}</p>}
    </>
  )
}

export default FormUser
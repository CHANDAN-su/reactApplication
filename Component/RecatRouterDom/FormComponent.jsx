import React from 'react'
import { createBrowserRouter, RouterProvider, Form } from "react-router-dom";


const FormCom = () => {
    return (
        <>
        <Form method='post'>
            <div><label>UserName: </label><input type="text" name='username' /></div><br />
            <div><button type='submit'>Submit</button></div>
        </Form>
        <Form method='post' action='/submitForm'>
        <div>
            <label>UserName2:</label>
            <input type="text" name="username2" />
        </div>
        <button type='submit'>Submit</button>
        </Form>
    </>
    )
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <FormCom/>
    }
])

function FormComponent() {
  return (
        <>
            <RouterProvider router={router} />
        </>
  )
}

export default FormComponent
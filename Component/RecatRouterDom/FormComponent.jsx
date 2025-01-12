import React from 'react'
import { createBrowserRouter, RouterProvider, Form } from "react-router-dom";


const FormCom = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Custom submit logic");
    }

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
        <Form method='post' onSubmit={handleSubmit}>
        <div>
            <label>UserName3:</label>
            <input type="text" name="username3" />
        </div>
        <button type='submit'>Submit</button>
        </Form>
        <Form method='post' target='_blank'>
        <div>
            <label>UserName3:</label>
            <input type="text" name="username3" />
        </div>
        <button type='submit'>Submit</button>
        </Form>
        <Form method='post' noValidate>

        </Form>
        <Form method='post' encType='multipart.form-data'>
            
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
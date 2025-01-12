import React from "react";
import { createBrowserRouter, RouterProvider, Form } from "react-router-dom";

const handleSubmit = async ({request}) => {
    const formData = await request.formData();
    const userName = formData.get("username");
    const email = formData.get("email");

    console.log("Form Submited with", {userName, email});

    return {
        sucess: true
    }
}

const FullExample = () => {
  return (
    <>
      <Form
        method="post"
        encType="multipart/form-data"
        noValidate
        target="_blank"
        onSubmit={() => console.log("Custom Submit")}
      >
        <input type="text" name="username" placeholder="Enter your usename" />
        <input type="email" name="email" placeholder="Enter your email" />
        <input type="file" name="profilepoicture" />
        <button type="submit">Submit</button>

      </Form>
    </>
  );
};

const FormCom = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Custom submit logic");
  };

  return (
    <>
      <Form method="post">
        <div>
          <label>UserName: </label>
          <input type="text" name="username" />
        </div>
        <br />
        <div>
          <button type="submit">Submit</button>
        </div>
      </Form>
      <Form method="post" action="/submitForm">
        <div>
          <label>UserName2:</label>
          <input type="text" name="username2" />
        </div>
        <button type="submit">Submit</button>
      </Form>
      <Form method="post" onSubmit={handleSubmit}>
        <div>
          <label>UserName3:</label>
          <input type="text" name="username3" />
        </div>
        <button type="submit">Submit</button>
      </Form>
      <Form method="post" target="_blank">
        <div>
          <label>UserName3:</label>
          <input type="text" name="username3" />
        </div>
        <button type="submit">Submit</button>
      </Form>
      <Form method="post" noValidate></Form>
      <Form method="post" encType="multipart.form-data"></Form>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <FormCom />,
  },
  {
    path: "/fullform",
    element: <FullExample />,
    action: handleSubmit
  },
]);

function FormComponent() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default FormComponent;

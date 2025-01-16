import React from 'react'
import { createBrowserRouter, RouterProvider, Form, useActionData } from "react-router-dom";

const handleFeedback = async ({ request}) => {
    const forData = await request.formData();
    const name = forData.get("name");
    const feedback = forData.get("feedback");

    if(!name || !feedback){
        return {
            error: "Name and feedback are required!"
        }
    }

    return {success: `Thank you, ${name}, for your feedback!`}
}

const FeedbackForm  = () => {

    const action = useActionData();

    return (
        <>
            <div>
            <h1>Feedback Form</h1>
            <Form method='post'>        
                <div>
                    <label>Name:
                        <input type="text" name="name" placeholder='Enter your name...' />
                    </label>
                </div>
                <div>
                    <label>Feedback:
                        <textarea name="feedback" placeholder='Enter your feedback'></textarea>
                    </label>
                </div>
                <button type='submit'>Submit</button>
            </Form>

            {/* Display action data (errors or success messages) */}
            {action?.error && <p style={{color: "red"}}>{action.error}</p>}
            {action?.success  && <p style={{color: "green"}}>{action.success}</p>}

        </div>
        </>
    )
}


const router = createBrowserRouter([
    {
        path: "/feedback",
        element: <FeedbackForm/>,
        action: handleFeedback
    }
])

function UseActiveData() {
    
  return (
    <>
        <RouterProvider router={router}/>
    </>
  )
}

export default UseActiveData
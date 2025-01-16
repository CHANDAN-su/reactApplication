import React from 'react'
import { createBrowserRouter, RouterProvider, defer, Await, useLoaderData  } from "react-router-dom";


const Loading = () => <h2>Loading....</h2>
// const Error = () => {
//   return (
//     <>
//     <div>
//       <h2>Error Loading Data</h2>
//     </div>
//     </>
//   )
// } 

const UserPage = () => {
  const data = useLoaderData()
  return (
    <>
      <div>
        <h1>User Page</h1>
        <React.Suspense fallback={<Loading/>}>
          <Await resolve={data.posts}>
              {(posts) => <h2>Post title: {posts.title}</h2>}
          </Await>
          <Await resolve={data.comments}>
            {
              (comments) => <h2>Comment name: {comments.name}</h2>
            }
          </Await>
        </React.Suspense>
      </div>
    </>
  )
}

const userLoader = () => {
return defer({
  posts: fetch("https://jsonplaceholder.typicode.com/posts/1").then((res) => {
    if (!res.ok) {
      throw new Error("Failed to fetch posts");
    }
    return res,json();
  }),
  comments: fetch("https://jsonplaceholder.typicode.com/comments/1").then((res) => {
    if (!comments.ok) {
      throw new Error("Failed to fetch posts"); 
    }

    return res.json();
  })
})  
}

const router = createBrowserRouter([
  {
    path: "/user",
    element: <UserPage/>,
    loader: userLoader
  }
]);


function AwaitImport() {
  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default AwaitImport
import React from 'react'
import { useLoaderData } from "react-router-dom";

function Loaddata() {

const data = useLoaderData();

  return (
    <>
        <div>{JSON.stringify(data)}</div>
    </>
  )
}

export default Loaddata
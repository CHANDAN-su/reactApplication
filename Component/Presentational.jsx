import React from 'react'

function Presentational({name, age, onGreat}) {
  return (
    <>
        <h1>User profile</h1>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <button onClick={onGreat}>Great</button>
    </>
  )
}

export default Presentational;
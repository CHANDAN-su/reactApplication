import React from 'react'

function Bhanu({name, CountGunShots, EventGunShots}) {
  return (
    <>
        <h1 onMouseDown={EventGunShots}>{name} GunShots: {CountGunShots}</h1>
    </>
  )
}

export default Bhanu;
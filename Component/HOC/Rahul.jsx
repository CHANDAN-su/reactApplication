import React from 'react'

function Rahul({name, CountGunShots, EventGunShots}) {
  return (
    <>
        <h1 onMouseDown={EventGunShots}>{name} GunShots: {CountGunShots}</h1>
    </>
  )
}

export default Rahul;
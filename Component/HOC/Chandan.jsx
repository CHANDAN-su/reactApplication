import React from 'react'

function Chandan({name, CountGunShots, EventGunShots}) {
  return (
    <>
        <h1 onMouseDown={EventGunShots}>{name} GunShots: {CountGunShots}</h1>
    </>
  )
}

export default Chandan;
import React, { useState } from 'react'

function Hoc(Man) {

    return function wrappingFunction(props){

    const [gunshots, setGunshots] = useState(0);

    const heandleGunshots = () => {
        setGunshots(gunshots + 1);
    }

    return (
            <>
                < Man {...props} CountGunShots={gunshots} EventGunShots={heandleGunshots} />
            </>
          )
    }

}

export default Hoc
// import React, {useState} from 'react'
import React from 'react'
import Hoc  from "../Component/HOC/Hoc";
import  Rahul  from "../Component/HOC/Rahul";
import  Bhanu  from "../Component/HOC/Bhanu";
import  Chandan from "../Component/HOC/Chandan";
import HocOfDataFetch from "../Component/HOC/HocOfDataFetch"

// function Army(Man){

//     return function wrappingFunction(props){

//     const [gunshots, setGunShots] = useState(0);

//     const heandleGunShots = () => {
//         setGunShots(gunshots + 1);
//     }

//     return (
//         <>
//         <Man 
//         {...props}
//         GunShot = {gunshots}
//         GunShotHendle ={heandleGunShots}
//         />
//         </>
//     )

//     }
    
// }

// function Rahul({name, GunShot, GunShotHendle}){
//     return <h1 onMouseDown={GunShotHendle}>{name} GunSlots: {GunShot} </h1>
// }
// function Bhanu({name, GunShot, GunShotHendle}){
//     return <h1 onMouseDown={GunShotHendle}>{name} GunSlots: {GunShot} </h1>
// }
// function Chandan({name, GunShot, GunShotHendle}){
//     return <h1 onMouseDown={GunShotHendle}>{name} GunSlots: {GunShot} </h1>
// }

// const EnhancedRahul = Army(Rahul);
// const EnhancedBhanu = Army(Bhanu);
// const EnhancedChandan = Army(Chandan);

// function Rahul({name}){

//     const [gunshots, setGunShots] = useState(0);

//     const heandleGunShots = () =>{
//         setGunShots(gunshots + 1);
//     }   

//     return(
//         <>
//             <h1 onMouseDown={heandleGunShots}>{name} GunSlots: {gunshots}</h1>
//         </>
//     )
// }

// function Bhanu({name}){

//     const [gunshots, setGunShots] = useState(0);

//     const heandleGunShots = () =>{
//         setGunShots(gunshots + 1);
//     }   

//     return(
//         <>
//             <h1 onMouseDown={heandleGunShots}>{name} GunSlots: {gunshots}</h1>
//         </>
//     )
// }

// function Chandan({name}){

//     const [gunshots, setGunShots] = useState(0);

//     const heandleGunShots = () =>{
//         setGunShots(gunshots + 1);
//     }   

//     return(
//         <>
//             <h1 onMouseDown={heandleGunShots}>{name} GunSlots: {gunshots}</h1>
//         </>
//     )
// }

const EnhancedRahul1 = Hoc(Rahul);
const EnhancedBhanu1 = Hoc(Bhanu);
const EnhancedChandan1 = Hoc(Chandan);

const withLogger = (WrappedComponent) => {
    return (props) => {
        return <WrappedComponent {...props} />
    }
}

function HelloWorld({user}){
    return(
        <>
        <h1>Hello, {user}</h1>
        </>
    )
}

const EnhancedHelloWord = withLogger(HelloWorld);

// Higher-Order Component to check authentication
const withAuth = (WrappedComponent) => {
    return (props) => {

        const { isAuthenticated } = props;

        if (!isAuthenticated) {
            return <h2>Please log in to view this content.</h2>;
        }

        return < WrappedComponent {...props}/>
    }
}

const hello = ({user}) => {
    return <h1>Welcome: {user}</h1>
}

const EnhancedUser = withAuth(hello);


function HighOrderComponents() {

    const userIsAuthenticated  = true;

  return (
    <>
        {/* single component  */}
        {/* < Rahul name={"Rahul"} />
        < Bhanu name={"Bhanu"} />
        < Chandan name={"Chandan"} /> */}

        {/* Hoc */}
        {/* < EnhancedRahul name={"Rahul"} />
        < EnhancedBhanu name={"Bhanu"} />
        < EnhancedChandan name={"Chandan"} /> */}


        {/* hoc import */}
        < EnhancedRahul1 name="Rahul" />
        < EnhancedBhanu1 name="Bhanu" />
        < EnhancedChandan1 name="Chandan" />
        < EnhancedHelloWord user={"world"} />
        < EnhancedUser isAuthenticated={userIsAuthenticated} user={"Chandan Thakur"} />
        < HocOfDataFetch />

    </>
  )
}

export default HighOrderComponents

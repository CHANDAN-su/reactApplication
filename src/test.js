import react, { useState, useEffect } from "react";

function FunctionCoponement() {

    const [counter, setCOunter] = useState(0);

    const increment = (){
        setCOunter(counter + 1);
    }

    const decrement = () => {
        setCOunter(counter - 1);
    }

    if (counter < 0) {
        setCOunter(0);
    }

    return (
        <>
            <h1>Counter: {counter} </h1>
            <button onClick={increment}>Add</button>
            <button onClick={decrement}>Sub</button>
        </>
    )


}


function User(){

    const [users, setUsers] = useState({
        name: "chandan thakur",
        age: 24
    });

    function Great(){
        alert(`Hello, ${users.name} || ${users.age}`);
    }

    return(
        <>
            <ParentComponement name={users.name} age={users.age} OnGreat={Great}/>
        </>
    )
}


function ParentComponement({name, age, OnGreat}){
    return (
        <>
            <h1>User profile</h1>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <button onClick={OnGreat}>Great</button>
        </>
    )
}






// combine code
function HomePage(){


    const [users, setUser] = useState({
        username: "chandan thakur",
        useremail: "chandan70732516862gmail.com",
        userphonenumber: "7073251686",
        useraddress: "B-11 govindouri rakdi sodala jaipur"
    })

    const [fetchUser, setFetchUser] = useState([]);

    useEffect(() => {
        const fectUser = async () => {
            const reponse = await fetch("url");
            const data = await reponse.json();

            setFetchUser(data);
        }
        fectUser();
    }, []);

    function userAllDetaila(){
        return `Hello, ${users.username} and phone number ${users.userphonenumber}`
    }

    return (
        <>
        <Hearder username={users.username} useremail={users.useremail} userAllDetaila={userAllDetaila}/>
        <UserLists user={fetchUser}/>
        <Footer  userphonenumber={users.userphonenumber} useraddress={users.useraddress} />
        </>
    )
}


function Hearder({username, useremail , userAllDetaila}){
    return (
        <>
            <h1>`${username} || ${useremail} || ${userAllDetaila}`</h1>
        </>
    )
}

function Footer({userphonenumber, useraddress}){
    return (
        <>
            <h1>`${userphonenumber} ${useraddress}`</h1>
        </>
    )
}

const UserLists = ({user}) => {
    return (
        <>
        <hq>Use List</hq>
        <ul>
        {
                user.map((user) => {
                    <li key={user.id}>{user.name}</li>
                })
            }
        </ul>
        </>
    )
}






const UserList = ({user}) => {
    return (
        <>
            <h1>Uer List</h1>
            <ul>
                {
                    user.map((user) => (
                        <li key={user.id}>{user.name}</li>
                    ))
                }
            </ul>
        </>
    )
}

const UseFetchUser = async () => {

    const [user, setUser] = useState([]);

    useEffect(() => {

        const fetchUser = () => {
            const reqponse = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await reqponse.json();
    
            setUser(reqponse);
        }
    
        fetchUser();

    }, []);

    return user;
}

const Seperate = () => {
    const user = UseFetchUser();

    return (
        <>
            <UserList user={user}/>           
        </>
    )
}


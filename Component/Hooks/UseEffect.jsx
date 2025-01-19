import React, {useState, useEffect} from 'react'

// Syntax useEffect
// function UseEffect(){
//     useEffect(() => {
//         return () => {

//         }
//     }, [dependencies]);
// }

const Timer = () => {
    const [time, setTime] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime((prev) => prev +1)
        }, 10000);

        return () => clearInterval(interval);
    },[])

    return (
        <>
            <h1>Time: {time}</h1>
        </>
    )
}


function UseEffectDsta() {

    const [data, setData] = useState([]);

    useEffect( () => {


        const data  = async () => {

            const response = await fetch("https://jsonplaceholder.typicode.com/posts")
            const data = await response.json();
    
            setData(data);
    
        }

        return data;
        
        
    }, []);

  return (
    <>
        <div>
            <h1>Tittle</h1>
            <ul>
                {data.map((item) => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </div>
        <Timer/>
    </>
  )
}

export default UseEffectDsta
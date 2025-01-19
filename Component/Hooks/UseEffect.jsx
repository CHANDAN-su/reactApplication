import React, {useState, useEffect} from 'react'

// Syntax useEffect
// function UseEffect(){
//     useEffect(() => {
//         return () => {

//         }
//     }, [dependencies]);
// }


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
    </>
  )
}

export default UseEffectDsta
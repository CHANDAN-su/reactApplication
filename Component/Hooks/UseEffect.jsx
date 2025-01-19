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

const sampleData = [
    {
      userId: 1,
      id: 1,
      title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    },
    {
      userId: 1,
      id: 2,
      title: "qui est esse",
      body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    },
    {
      userId: 1,
      id: 3,
      title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
    },
    {
      userId: 1,
      id: 4,
      title: "eum et est occaecati",
      body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
    },
    {
      userId: 1,
      id: 5,
      title: "nesciunt quas odio",
      body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
    },
    {
      userId: 1,
      id: 6,
      title: "dolorem eum magni eos aperiam quia",
      body: "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
    },
    {
      userId: 1,
      id: 7,
      title: "magnam facilis autem",
      body: "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas",
    },
  ];

const SearchComponent = () => {
    const [query, setQuery] = useState("");
    const [result, setResult] = useState([]);

    useEffect(() => {
        if (query) {
            const filteredResults = sampleData.filter((item) => 
                item.title.toLowerCase().includes(query.toLowerCase())
            )
            setResult(filteredResults);
        } else {
            setResult([]);
        }
    }, [query])
    
    return (
        <>
            <div>
                <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder='Search......'/>
            </div>
            <div>
                <ul>
                    {result.map((item) => (
                        <li key={item.id}>{item.title}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}

const MouseTracker = () => {
    const [position, setPosition] = useState({x: 0, y: 0});

    useEffect(() => {

            const handleMouseMove = (e) => {
                setPosition({
                    x: e.clientX,
                    y: e.clientY
                })
            }

            window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove)
        }

    })


    return (
        <>
            <h1>
      Mouse Position: X: {position.x}, Y: {position.y}
    </h1>
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
        <SearchComponent/>
        <MouseTracker/>
    </>
  )
}

export default UseEffectDsta
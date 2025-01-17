import React, {useState, useEffect} from 'react'

function FetchingDatawithuseEffectHook() {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

          const fetchData = async ()   => {
                try {
                    setLoading(true);
                    const response  = await fetch("https://jsonplaceholder.typicode.com/users");

                    if (!response .ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                        
                    }

                    const data =  await response.json();
                    setUsers(data);
                    
                } catch (error) {
                    setError(error.message);
                } finally {
                    setLoading(false);
                }
          }

          fetchData();

    }, []);

    if(loading) return <p>Loading....</p>
    if(error) return <p>Error: {error}</p>


  return (
    <>
        <div>
            <h1>User List</h1>
            <nav>
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>
                            {user.name} - {user.email}
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    </>
  )
}

export default FetchingDatawithuseEffectHook
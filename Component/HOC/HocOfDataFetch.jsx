import React, { useState, useEffect } from 'react'


const withData = (WrappedComponent, dataSource) => {

    return (props) => {

        const [data, setData] = useState(null);

        useEffect(() => {

            // Simulate data fetching
            fetch(dataSource)
                .then((response) => response.json())
                .then((metaData) => setData(metaData));

        }, [dataSource])

        if (!data) {
            return <h1>Loding...</h1>
        }

        return < WrappedComponent data={data} {...props}  />

    }
}

const user = ({ data }) => {
    return (
        <>
            <ul>
                {data.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </>
    )
}

const EnhancedData = withData(user, "https://jsonplaceholder.typicode.com/users");

function HocOfDataFetch() {
    return (
        <>
        <h1>Users:</h1>
        <EnhancedData />
        </>
    )
}

export default HocOfDataFetch
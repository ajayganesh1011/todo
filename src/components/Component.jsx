import React from 'react'
import useFetch from '../customHooks/usefetch';
import useFetch from '../customHooks/usefetch.js';



function Component() {

    const url = "https://jsonplaceholder.typicode.com/posts?_limit=30";
    const { data, loading, error } = useFetch(url);

    if (loading) {
        return <div className="text-center mt-5">Loading...</div>;
    }

    if (error) {
        return <div className="text-center text-danger mt-5">Error: {error}</div>;
    }

    return (
        <>
            <div className="container mt-5">
                <h1 className="text-center mb-4">Posts</h1>
                <div className="list-group">
                    {data.map((post) => (
                        <div key={post.id} className="list-group-item">
                            <h5 className="mb-2">{post.title}</h5>
                            <p>{post.body}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Component
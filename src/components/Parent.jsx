import React, { useState } from 'react'
import Child from './Child';

function Parent() {

    const [message, setMessage] = useState("No message from child yet");

    // Function to update the parent's state
    const handleMessageChange = (newMessage) => {
        setMessage(newMessage);
    };

    return (
        <>
            <div className="container mt-5">
                <h1 className="text-center">Parent-Child Communication</h1>
                <div className="alert alert-info text-center">
                    <strong>Message from Child:</strong> {message}
                </div>
                <Child onMessageChange={handleMessageChange} />
            </div>
        </>
    )
}

export default Parent
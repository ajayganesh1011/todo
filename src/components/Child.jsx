import React, { useState } from "react"

function Child({ onMessageChange }) {

    const [inputValue, setInputValue] = useState("");

    // Handle input change
    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    // Send message to parent
    const sendMessage = () => {
        onMessageChange(inputValue);
        setInputValue(""); // Clear input after sending
    };

    return (
        <>
            <div className="mt-4">
                <h3 className="text-center">Child Component</h3>
                <div className="d-flex justify-content-center">
                    <input
                        type="text"
                        className="form-control me-2"
                        style={{ maxWidth: "300px" }}
                        placeholder="Type a message"
                        value={inputValue}
                        onChange={handleChange}
                    />
                    <button className="btn btn-primary" onClick={sendMessage}>
                        Send
                    </button>
                </div>
            </div>
        </>
    )
}

export default Child
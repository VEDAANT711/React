import React from "react";
import { useState } from "react";

function FunctionFive({ message }){
    const [msg, setMessage] = useState(message)
    let changeMessage = () => {
        setMessage("Message 2")
    }
    return (
        <div>
            <h1>{msg}</h1>
            <button onClick={changeMessage}>changeMessage</button>
        </div>
    )
}
export default FunctionFive

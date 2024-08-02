// shortcircuit
import React,{useState}from "react";

const Functionone = () =>{
    // state
    const [isLoggedIn,setLoggedIn ]= useState(false)

    return(
        <div>
            <h1>Welcome to our website !</h1>
            {isLoggedIn && <p>You are logged in !</p>}
            <button onClick={()=>setLoggedIn(!isLoggedIn)}>
                {isLoggedIn ? 'Logout':'Login In'}
            </button>
        </div>
    )

}

export default Functionone;
import React,{useState} from "react";
const FunctionTwo =() =>{

    const[isLoggedIn, setLoggedIn] = useState(false)




return(
    <div>
        <h1>WELCOME TO OUR WEBSITE</h1>
        {isLoggedIn ? <p>You are LoggedIn !</p>:<p>You are LoggedOut</p> }
        <button onClick={()=>setLoggedIn(!setLoggedIn)}>
            { isLoggedIn ? "Log Out":"Log In"}</button>
    </div>
)

}

export default FunctionTwo;
import React,{useState}from "react";
const FunctionThree = () =>{

    const[isLoggedIn,setLoggedIn]=useState(true)
    const renderMessage = () =>{
        if(isLoggedIn){
            return <p you are Logged In></p>
        }
        else{
            return <p You are Logged Out></p>
        }
    };

    return (
        <div>
            <h1>WELCOME TO OUR WEBSITE</h1>
            {renderMessage()}
            <button onClick={()=> setLoggedIn(!isLoggedIn)}>
            {isLoggedIn ? "Log Out":"Log In"}</button>
        </div>
    )
}

export default FunctionThree;
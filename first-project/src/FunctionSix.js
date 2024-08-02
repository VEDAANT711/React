import React from "react";

const items = [
    {id:1,name:"Apple"},
    {id:2,name:"Kiwi"},
    {id:3,name:"Chikoo"},
    {id:4,name:"Papaya"},
    {id:5,name:"Mango"}
]

function FunctionSix(){


    return (
        <div>
            <h1>List of Fruits</h1>
            <ul>
                {items.map((item)=>(
                    <li key = {item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    )
}
export default FunctionSix
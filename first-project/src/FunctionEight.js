import React from "react";

const items = [
    {id:1,name:"item1"},
    {id:2,name:"item2"},
    {id:3,name:"item3"}
]

const styles = {
    
    li:{
        color:"red"
    },
    li:{
        color:"skyblue"
    }
}

function FunctionEight(){
    return(
        <div>
            {
                items.map((item)=>(
                    <li style={styles.li}>{item.name}</li>
                ))
            }
        </div>
    )
}

export default FunctionEight
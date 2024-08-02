import React, { Component } from "react";

class classProp extends Component{
    
    render(){
        let {greet,greet2} = this.props
        return(
            <div>
                <h1>{greet}</h1>
                <h1>{greet2}</h1>
            </div>
        )
    }

}
export default classProp
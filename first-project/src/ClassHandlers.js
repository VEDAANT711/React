// import { Component } from "react";
// import React from "react";

// class ClassHandlers extends Component{

//     constructor(props){
//         super(props)
//         this.state = {
//             cnt: Number (this.props.count),
//             style:{
//                 color:"green"
//             }
//         }
//     }

//     incrementCount = () =>{
//         //this.state.cnt = tihs.state.cnt 1
//         this.setState(()=>({
//             cnt:this.state.cnt + 1
//         }))
//     }

//     render(){
//         return(
//             <div>
//                 <h1 style={this.state.style}>{this.state.cnt}</h1>
//                 <button onClick = 
//                 {this.incrementCount}>Click</button>
//             </div>
//         )
//     }
// }

// export default ClassHandlers

import { Component } from "react";
import React  from "react";

class ClassHandlers extends Component{

        constructor(props){
            super(props)
            this.state = {
                cnt:Number(this.props.count),
                style:{
                    color:"yellow"
                }
            }

        }

        incrementCount =()=>{
            // this.state.cnt = this.state.cnt + 1
            this.setState(()=>({
                cnt:this.state.cnt  + 1
            }))
        }

        // incrementFive =()=>{
        //     this.incrementCount()
        //     this.incrementCount()
        //     this.incrementCount()
        //     this.incrementCount()
        //     this.incrementCount() 
        // }

        render(){
            return(
                <div>
                    <h1 style={this.state.style}>{this.state.cnt}</h1>
                    <button onClick = {this.incrementCount}>Click</button>
                </div>
                
            )
        }



}
export default ClassHandlers
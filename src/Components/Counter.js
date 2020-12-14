import React, { Component } from 'react'
import '../App.css'

 class Counter extends Component {
     constructor(){
         super()
         this.state={
             count:0
         }
     }
     increment(){
         this.setState({
             count:this.state.count+1
         })
     }
    render() {
        return (
            <div className="App">
                <h1>Count:{this.state.count}</h1>
<button onClick={()=>{this.increment()}}>+</button>
                
            </div>
        )
    }
}

export default Counter

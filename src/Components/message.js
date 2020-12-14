import React, { Component } from 'react'

 class Message extends Component {
     constructor(){
         super()
         this.state={
             message:"Welcome to visitor"
         }
     }
     changeMsg(){
this.setState({
    message:"thanks for subscribibg"
})
     }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>{this.changeMsg()}}>subscribe</button>
            </div>
        )
    }
}

export default Message

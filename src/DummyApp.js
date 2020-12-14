
import React, { Component } from 'react'
import Counter from './Components/Counter'
import Greet from "./Components/Greet"
import Message from './Components/message'
export class DummyApp extends Component {
    render() {
        return (
            <div>
                <Counter/>
                {/* <Message/> */}
               {/* <Greet name="prathyusha" color="blue">
                   <p>u r choosen good color</p>
               </Greet>
               <Greet name="apple" color="red">
                   <button>save</button>
               </Greet>
               <Greet nme="cherry" color="violet"/>  */}
            </div>
        )
    }
}

export default DummyApp

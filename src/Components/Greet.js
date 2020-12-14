import React from "react";

const Greet=(props)=>{
    return(
        <div>
<h1> Hello My name is {props.name} and my fav color is {props.color} </h1>
{props.children}
        </div>
    )
}

export default Greet;
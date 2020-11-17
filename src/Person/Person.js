 import React from 'react';




const People=(props)=>{
   
      
    return(
        
        <div>
            <button  >clickme!</button>
            <p onClick={props.usemyclick}>my name is:{props.name} and empId{props.empId}</p>
            <br/>
            <p>{props.children}</p>
        </div>
    )
}






//  const Person=(props)=>{
//      return(
//          <div>
//              {
//              props.isPersonLoggedIn ?
//              <div>
//              <h2> Welcome to u r dashboard {props.name} </h2>
            
//              <button onClick={props.logout}>Logout</button>
//              </div>:
//              <div ><h2>U r session expire please login</h2>
//              <input type="text" placeholder="enter your name"></input>
//              <button onClick={props.login}>Login</button>
//              </div>
//              }
//          </div>
//      )
     
//  }

 export default People;
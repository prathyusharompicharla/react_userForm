import React from 'react';




function Employee(props){
  return(
    <div className="App">
      firstName:<input type="text" placeholder="enter your firstname" onChange={props.changeHandler}></input> <br/><br/>
      lastName:<input type="text" placeholder="enter Your lastname" onChange={props.changeHandler}></input><br/><br/>
      phoneNumber:<input type="number" placeholder="enter your 10-digits number" onChange={props.changeHandler}></input><br/><br/>
      <button onClick={props.submit}>Submit</button>
    </div>
  )
}

export default Employee;
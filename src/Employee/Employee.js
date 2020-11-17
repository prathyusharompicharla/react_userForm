import React from 'react';

const Employee = (props) => {
return (
        <div >
            FirstName:  <input type="text"></input><br/><br/>
          LastName:  <input type="text"></input><br/><br/>
            PhoneNumber:<input type="number"></input><br/><br/>
        <button>Submit</button>
        </div>
    )
}
export default Employee;
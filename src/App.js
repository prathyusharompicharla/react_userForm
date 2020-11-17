import React, { Component } from 'react';
import './App.css';

import Employee from './Employee/Employee';
import Person from './Person/Person';


class App1 extends Component {
  constructor(props) {
    super(props);
    this.toggleHandler = this.toggleHandler.bind(this);
  }
  state = {
    persons: [
      { name: "prathyusha", empId: 1 },
      { name: "navya", empId: 2 },
      { name: "vanaja", empId: 3 },
      { name: "orange", empId: 3 },
      { name: "apple", empId: 4 },
      { name: "banana", empId: 5 }
    ], showPersons: false
  }

  toggleHandler() {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow })
  }

  deleteEmpHandler = (index) => {
    let updatePersons = [...this.state.persons];
    updatePersons.splice(index, 1);
    this.setState({ persons: updatePersons })
  }



  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map((personObj, index) => {
              return <Person usemyclick={() => { this.deleteEmpHandler(index) }} name={personObj.name} empId={personObj.empId} />
            }
            )
          }
        </div>
      );
    }
    return (
      <div>
        <h2> welcome to vincloud</h2>
        <button onClick={this.toggleHandler}>showPersons</button>
        {persons}
      </div>
    )
  }
}









class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteEmpHandler=this.deleteEmpHandler.bind(this);
    this.state = {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      empData: []
    };
  }

  handleChange(e) {
    this.setState({
      input: e.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    let data = { firstName: this.state.firstName, lastName: this.state.lastName, phoneNumber: this.state.phoneNumber }
    this.setState(prevState => ({
      empData: prevState.empData.concat({ data: data })
    }));
  }
  
  deleteEmpHandler = (index) => {
    let updateEmp = [...this.state.empData];
    console.log(updateEmp)
    updateEmp.splice(index, 1);
    this.setState({ empData: updateEmp })
  }



  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          FirstName:
                    <input value={this.state.firstName} onChange={(e) => { this.setState({ firstName: e.target.value }) }} />
          <br />
                    LastName:
                    <input value={this.state.lastName} onChange={(e) => { this.setState({ lastName: e.target.value }) }} />
          <br />
                    PhoneNumber:
                    <input value={this.state.phoneNumber} onChange={(e) => { this.setState({ phoneNumber: e.target.value }) }} />
          <br />
          <button type='submit'>Submit!</button>
        </form>


        <table>
          <thead>
            <tr>
              <th>FirstName</th>
              <th>LastName</th>
              <th>PhoneNumber</th>
            </tr>
          </thead>
          <tbody>

            {this.state.empData.map((unit) => {
              return (
                <tr >
                  <td >{unit.data.firstName} </td>
                  <td> {unit.data.lastName} </td>
                  <td> {unit.data.phoneNumber} </td>
                  <button onClick={() => this.deleteEmpHandler(unit.data.index)}>Delete</button>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    );
  }
}


export { App1 };
export default App;
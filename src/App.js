import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import AddTitle from './addTitle';

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
    this.deleteEmpHandler = this.deleteEmpHandler.bind(this);
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
      <div className="App">
        <h1> Employee form</h1>

      </div>
    );
  }
}




class App3 extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    inputValue: []
  };
  changeHandler = event => {
    this.setState({
      input: event.target.value
    })
  };

  submit = () => {
    let data = { firstName: this.state.firstName, lastName: this.state.lastName, phoneNumber: this.state.phoneNumber }
    this.setState(prevState => ({
      inputValue: prevState.inputValue.concat({ data: data })
    }));
    // this.setState({ inputValue: this.inputValue });
  };

  render() {
    return (
      <div>

        <Employee submit={this.submit} />
        {/* <div>{this.state.inputValue}</div> */}

        <table>
          <thead>
            <tr>
              <th>FirstName</th>
              <th>LastName</th>
              <th>PhoneNumber</th>
            </tr>
          </thead>
          <tbody>

            {this.state.inputValue.map((unit) => {
              console.log(unit)
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
  }}

 
  
class Route extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title:"",
      posts:[] 
    }
   
  }
componentDidMount(){
  axios.get('http://jsonplaceholder.typicode.com/posts')
  .then(response=>{
    this.setState({posts:response.data})
  }).catch(err=>{
    this.setState({posts:err})
  })
}

  render() {
   
    return (
      <div className="App">
          <h1 style={{textAlign:'center'}}>React Tutorial</h1>
          <AddTitle  />
          {this.state.posts.map(post=>{
            return <p>{post.title}</p>
          })}
      </div>
    );
  }
}

export  {Route};





export default App3;
export { App1 };
export { App };
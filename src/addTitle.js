import React, { Component } from 'react'
import axios from'axios'

 class AddTitle extends Component {
     constructor(props){
         super(props);
         this.state={
            title:'',
            posts:[]
            }
           
            this.handleSubmit = this.handleSubmit.bind(this);
     }



 
 handleSubmit(event) {
    event.preventDefault()
    let data = document.getElementById('title').value;
    axios.post('http://jsonplaceholder.typicode.com/posts',{data})
    .then(res=>{
      // console.log(res)
     this.setState({title:res.data.data})
     console.log(res.data.data)
    }).catch(err=>{
      console.log(err)
    })
  }


  render() {
const{title}=this.state
    return(
      <div>
            <form onSubmit={this.handleSubmit}>
                <h1>Title</h1>
                <input
                id="title"
                  type="text"
                  name="title"
                 
                 
                  placeholder="title"/>
           
                <button   type="submit">Save</button>
              
            </form>
         {this.state.title}
      </div>
    )
  }
}



export default AddTitle

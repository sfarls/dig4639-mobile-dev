import React from 'react';
import logo from './logo.svg';
import './App.css';
import Contacts from './components/contacts.js';

const HEADERS = {
  "method": "GET",
  "headers": {
    "api": "farls",
    "Content-Type": "application/json",
    "Accept": "application/json"
  }
}



class App extends React.Component {

  render(){
    return (
      <>
        <div>
          {
            this.state.contacts.map((value,index) => {
              return <p key={index}>{value.name}</p>;
            })
          }
        </div>
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">Samantha Farls</h3>
            <h4 className="card-title">123-456-7890</h4>
            <button onClick="addContacts()">Add Contacts</button>
          
            <button onClick="deleteContacts()">Delete Contacts</button>
          </div>
        </div>
      </>
    );
    
  }
  state = {contacts:[]}
  callApi(){
    fetch("http://plato.mrl.ai:8080/", HEADERS)
      .then(response => response.json())
      .then(body => console.log(body))
  }

  componentDidMount() {
    fetch("http://plato.mrl.ai:8080/contacts", HEADERS)
      .then(res => res.json())
      .then(data => {this.setState({contacts: data.contacts})})
  }

  addContacts(position, state){
    fetch("http://plato.mrl.ai:8080/contacts/add", 
      { 
        ...HEADERS, 
        "method": "POST",
        "body": JSON.stringify({
          name: this.state.name,
          number: this.state.number
          })
      })
      .then((res) => res.json())
      .then((data) => {this.setState({contacts: data.contacts})})
  }

  // This should probably have the position to delete.
  deleteContacts(position){
    fetch(" http://plato.mrl.ai:8080/contacts/remove", 
      {...HEADERS, 
        "method": "POST",
        "body": JSON.stringify({
          position: position
        })
      })
    .then((res) => res.json())
    .then(body => {console.log(body) 
    if(body.removed != undefined ){
      const contacts = this.state.contacts.filter((v,i) =>
      (i !== position))
      this.setState({contacts: contacts})
    
    }
  })
  }
}
/*
CanvasRenderingContext2D() ;{
  return (

  );
}
*/

export default App;

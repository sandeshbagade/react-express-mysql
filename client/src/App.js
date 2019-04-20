import React, { Component } from 'react';
import './App.css';
import Customers from './components/customers';
import Form from './components/Form';

class App extends Component {
  render() {
    return (
      <div className="App">
         <Form/>
        <Customers />    
      </div>
    );
  }
}

export default App;


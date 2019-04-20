import React, { Component } from 'react';
import SearchBar from "./SearchBar";
import './customers.css';

class Customers extends Component {
  constructor() {
    super();
    this.state = {
      customers: [],
      search : []
    };
  }

  componentDidMount() {
    fetch('/api/customers')
      .then(res => res.json())
      .then(customers => this.setState({customers : customers.customers}, () => console.log('Customers fetched...', this.state.customers,this.state.customers.map(customer => 
          {customer.username} ))));
  }
  render() {
    return (
      <div>
        <h2>Customers</h2>
        <SearchBar searchBoxName={this.state.customers.emailId} onSearchTermChange='s' />
        <ul>
        {this.state.customers.map(customer => 
          <li >{customer.emailId} </li>
        )}
        </ul>
      </div>
    );
  }
}

export default Customers;

import React, { Component } from 'react';
import SearchBar from "./SearchBar";
const initialState = {
  username: "",
  email: "",
  phoneNo : '',
  password: "",
  usernameError: "",
  emailError: "",
  phoneNoError : '',
  passwordError: "",
  checkbox : false
};

class Form extends Component {
   constructor(props) {
        super(props);
        this.state = initialState;
      }

  validate = () => {
    let usernameError = "";
    let emailError = "";
    let phoneNoError = "";
    let passwordError = "";
    // let passwordError = "";

    if (!this.state.username) {
      usernameError = "USERNAME cannot be blank";
    }
    if (!this.state.email) {
      emailError = "EMAIL cannot be blank";
    }
    else if(!this.state.email.includes("@")) {
      emailError = "invalid EMAIL";
    }
    if (!this.state.phoneNo) {
     phoneNoError = "PHONE No. cannot be blank";
    }
    if (!this.state.password) {
      passwordError = "PASSWORD cannot be blank";
    }
    if (emailError || usernameError||phoneNoError||passwordError) {
      this.setState({ emailError, usernameError , phoneNoError, passwordError });
      return false;
    }

    return true;
};    
  handleSubmit =(event) => {
   
    event.preventDefault();
    const isValid = this.validate();
    console.log("inside submit");
    if (isValid) {
       console.log("inside valid");
      console.log(this.state);
      // clear form
      this.setState(initialState);
      document.getElementById("form_for_user").reset();
    fetch('/api/customers/addCustomers', {
         method: 'POST',
         headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json'
         },
        body: JSON.stringify( { 
         username : this.state.username,
         email : this.state.email,
         phoneNo :this.state.phoneNo,
         password : this.state.password
            })
      })
   }
}
  onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });

      }
    
 render () {
   return (
    <div className='main-w3layouts wrapper'>
      <div className='main-agileinfo'>
      <div className='agileits-top'>
         <form onSubmit={this.handleSubmit} id ='form_for_user'>
           <h2>Form for Insert API</h2>
            <div className='form-group'>
             <label htmlFor='username'>username</label>
             <input type='text' className='form-control text'
               name='username'  onChange={this.onChange} />
               <div style={{ fontSize: 15, color: "red" }}>
            {this.state.usernameError}
            </div>
           </div>
           
           <div className='form-group'>
             <label htmlFor='email'>Email address</label>
             <input type='text' className='form-control text '
               name='email'  onChange={this.onChange}  />
               <div style={{ fontSize: 15, color: "red" }}>
                  {this.state.emailError}
              </div>
           </div>
            <div className='form-group'>
             <label htmlFor='phoneNo'>Phone Number</label>
             <input type='text' className='form-control text'
               name='phoneNo' onChange={this.onChange} />
               <div style={{ fontSize: 15, color: "red" }}>
                  {this.state.phoneNoError}
              </div>
           </div>
           <div className='form-group'>
             <label htmlFor='password'>Password</label>
             <input type='password' className='form-control text w3lpass'
               name='password' onChange={this.onChange} />
               <div style={{ fontSize: 15, color: "red" }}>
                  {this.state.passwordError}
              </div>
           </div>
           <div className='wthree-text'>
            <label className='anim'>
              <input type='checkbox' className='checkbox' required name='checkbox' />
              <span>I Agree To The Terms & Conditions</span>
            </label>
            <div className='clear'> </div>
          </div>
           <input type='submit' value='Submit' />
         </form>
         <p>Don't have an Account? <a href=""> Login Now!</a></p>
      </div>
    </div>
     </div>
   )
 }
}
export default Form;
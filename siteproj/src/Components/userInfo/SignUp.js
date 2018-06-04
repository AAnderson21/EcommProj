import React, { Component } from 'react';
import axios from 'axios';

class SignUpForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      email: '',
      password: '',
      newsletter: ''
    };
    this.addUser = this.addUser.bind(this);
    this.updateUserName = this.updateUserName.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
    this.updatePassword= this.updatePassword.bind(this);
    this.updateNewsletter= this.updateNewsletter.bind(this);
  }

  addUser(event) {
    event.preventDefault();
    axios.post('http://localhost:3001/users', this.state)
    .then(resp => {
      this.clearState()
    return resp;
    })
    .catch(err => console.log(err))
  }

  clearState = () => {
    this.setState({
      userName: '',
      email: '',
      password: ''
    });
  }
  updateUserName(event) {
    this.setState({
      userName: event.target.value
    });
  }

  updateEmail(event) {
    this.setState({
      email: event.target.value
    });
  }

  updatePassword(event) {
    this.setState({
      password: event.target.value
    });
  }

  updateNewsletter(event) {
    this.setState({
      newsletter: event.target.value
    });
  }

  render() {
    return (
      <div className="SignUpForm">
        <form onSubmit={this.addUser}>
          <input
            onChange={this.updateUserName}
            placeholder="name"
            value={this.state.userName}
          />
          <input
            onChange={this.updateEmail}
            placeholder="age"
            value={this.state.email}
          />
          <input
            onChange={this.updatePassword}
            placeholder="height"
            value={this.state.password}
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SignUpForm;

<form class="px-4 py-3">
<div class="form-group">
                        <label for="exampleDropdownFormEmail1">User Name</label>
                        <input type="username" class="form-control" id="exampleDropdownFormEmail1" onChange={this.updateUserName} placeholder="ChewyBakBak24" value={this.state.userName} />
                    </div>
                    <div class="form-group">
                        <label for="exampleDropdownFormEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleDropdownFormEmail1" onChange={this.updateEmail} placeholder="email@example.com" value={this.state.email}/>
                    </div>
                   <div class="form-group">
                        <label for="exampleDropdownFormPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleDropdownFormPassword1" onChange={this.updatePassword} placeholder="Password" value={this.state.password}/>
                   </div>
                   <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="dropdownCheck" onClick={this.updateNewsletter}/>
                        <label class="form-check-label" for="dropdownCheck">I would like to receive weekly Newsletters on the latest Deals!</label>
                   </div>
                    <button type="submit" class="btn btn-primary">Sign Up</button>
                </form>
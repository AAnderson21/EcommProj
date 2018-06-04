import React, { Component } from 'react';
import axios from 'axios';
import User from './user';

class Users extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    }
  }

componentDidMount() {
  axios.get(`http://localhost:3001/users`)
.then((resp) => this.setState({users: [...resp.data]}))
.catch(err => console.log(err));
}
  render() {
    return (
      <div className="Users">
        <h1>Pencil Pushers</h1>
        <ul>
          { this.state.users.map((user) => {
            return <User name={user.username} email={user.email} 
            newsletter={user.newsletter} password={user.password} key={user.id} />;
          })}
        </ul>
      </div>
    );
  }
}

export default Users;
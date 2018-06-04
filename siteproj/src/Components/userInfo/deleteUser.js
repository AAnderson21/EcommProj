import React from 'react';
import axios from 'axios';

class DeleteUser extends React.Component {
  state = {
    id: '',
  }

  handleChange = event => {
    this.setState({ id: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    axios.delete(`http://localhost:3001/user${this.state.id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Smurf ID:
            <input type="text" name="id" onChange={this.handleChange} />
          </label>
          <button type="submit">Deactivate Account</button>
        </form>
      </div>
    )
  }
}
export default DeleteUser;
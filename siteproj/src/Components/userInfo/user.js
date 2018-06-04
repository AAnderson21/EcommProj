import React from 'react';

const users = (props) => {
  return (
    <div className="users">
      <h3>{props.username}</h3>
      <strong>{props.email} {props.newsletter}</strong>
      <p>{props.password}</p>
    </div>
  );
}

export default users;
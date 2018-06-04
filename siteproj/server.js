const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 3005;

const server = express();
server.use(bodyParser.json());
server.use(cors());

const sendUserError = (msg, res) => {
  res.status(422);
  res.json({ Error: msg });
  return;
};

let users = [];
server.get('/users', (req, res) => {
  res.json(users);
});
let userId = 0;

server.post('/users', (req, res) => {
  const { username, email, password } = req.body;
  const newuser = { username, email, password, id: userId };
  if (!username || !email || !password) {
    return sendUserError(
      'Ya gone did usered! userName/email/password are all required to create a user in the user DB.',
      res
    );
  }
  const finduserByuserName = user => {
    return user.username === username;
  };
  if (users.find(finduserByuserName)) {
    return sendUserError(
      `Sorry, this ${username} already exists in the user DB.`,
      res
    );
  }

  users.push(newuser);
  userId++;
  res.json(users);
});

server.put('/users/:id', (req, res) => {
  const { id } = req.params;
  const { username, email, password } = req.body;
  const finduserById = user => {
    return user.id == id;
  };
  const founduser = users.find(finduserById);
  if (!founduser) {
    return sendUserError('No user found by that ID', res);
  } else {
    if (username) founduser.username = username;
    if (email) founduser.email = email;
    if (password) founduser.password = password;
    res.json(founduser);
  }
});

server.delete('/users/:id', (req, res) => {
  const { id } = req.params;
  const founduser = users.find(user => user.id == id);

  if (founduser) {
    const userRemoved = { ...founduser };
    users = users.filter(user => user.id != id);
    res.status(200).json({ userRemoved });
  } else {
    sendUserError('No user by that ID exists in the user DB', res);
  }
});

server.listen(port, err => {
  if (err) console.log(err);
  console.log(`server is listening on port ${port}`);
});

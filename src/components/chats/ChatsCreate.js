import React from 'react';
import Axios from 'axios';

import Auth from '../../lib/Auth';
import socketIOClient from 'socket.io-client';
import { Input, Button } from 'react-materialize';

class ChatsCreate extends React.Component {

  webSocket = socketIOClient('/socket');

  state = {
    chat: {
      users: []
    },
    friends: [],
    message: ''

  }

  componentDidMount() {
    this.webSocket.on('connect', () => {
      console.log(`${this.webSocket.id} connected`);

      this.webSocket.on('MESSAGE', data => {
        console.log(data);
      });

    });
    const currentUserId = Auth.getPayload().userId;
    // console.log(currentUserId);

    Axios
      .get(`/api/users/${currentUserId}/friends`, {
        headers: { 'Authorization': `Bearer ${Auth.getToken()}`}
      })
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  }

  handleSubmit = (e, isSocket) => {
    e.preventDefault();
    const message = this.state.message;
    document.getElementById('messages').append(message);
    if(!isSocket) this.webSocket.emit('MESSAGE', { message });
  }

  handleChange = (e) => {
    this.setState({message: e.target.value});
  }

  render() {
    return(
      <div>
        <h1>Create chat</h1>
        <ul id="messages">
        </ul>
        <form onSubmit={this.handleSubmit}>
          <Input s={6}
            type="text"
            name="message"
            onChange={this.handleChange}
          />
          <Button>Send Message</Button>
        </form>
      </div>
    );
  }
}

export default ChatsCreate;

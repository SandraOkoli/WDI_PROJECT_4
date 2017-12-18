import React from 'react';
import Axios from 'axios';
import Auth from '../../lib/Auth';

import { Button } from 'react-materialize';

class MessageNew extends React.Component {

  state = {
    chat: {},
    message: ''
  }

  componentDidMount() {
    console.log(Auth.getToken());
    Axios
      .get(`/api/chats/${this.props.match.params.id}`, {
        headers: { 'Authorization': `Bearer ${Auth.getToken()}` }
      })
      .then(console.log(this))
      .then(res => this.setState({ chat: res.data }, () => {
        console.log(this.state);
      }))
      .catch(err => console.error(err));
  }

  handleChange = ({ target: { value } }) => {
    this.setState({ message: value });
  }


  handleSubmit = (e) => {
    e.preventDefault();

    Axios
      .post(`/api/chats/${this.props.match.params.id}/messages`, {
        content: this.state.message
      }, {
        headers: { 'Authorization': `Bearer ${Auth.getToken()}`}
      })
      .then(res => {
        console.log(res);
        const chat = Object.assign({}, this.state.chats, { messages: this.state.chat.messages.concat(res.data) });

        this.setState({ chat, message: '' });
      })
      .catch(err => console.log(err));
  }


  render() {
    return(
      <div className="container">
        <p>Want to collaborate?</p>
        { this.state.chat.messages &&
          <div>
            {this.state.chat.messages.map(message => {
              return (
                <p key={message.id}>{message.content}</p>
              );
            })}

          </div>
        }
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="message"
            placeholder="Hey, love your music, let me know when you're available"
            onChange={this.handleChange}
            value={this.state.message}
          />
          <Button>Send</Button>

        </form>
      </div>
    );
  }
}

export default MessageNew;

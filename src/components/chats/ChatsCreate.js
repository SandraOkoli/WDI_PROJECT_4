// import React from 'react';
// import Axios from 'axios';
//
// import Auth from '../../lib/Auth';
// import { Input, Button } from 'react-materialize';
//
// class ChatsCreate extends React.Component {
//
//   state = {
//     chat: {
//       users: []
//     },
//     friends: [],
//     message: ''
//
//   }
//
//   handleChange = ({ target: { name, value } }) => {
//     const message = Object.assign({}, this.state.message, { [name]: value });
//     this.setState({ message });
//   }
//
//  handleSubmit = (e) => {
//    e.preventDefault();
//
//    Axios
//      .post(`/api/chats/${this.state.chat.id}/messages`, this.state.message, {
//        headers: { 'Authorization': `Bearer ${Auth.getToken()}`}
//      })
//      .then(res => {
//        console.log(res);
//        const message = Object.assign({}, this.state.chat, { messages: this.state.chat.messages.concat(res.data)});
//
//        this.setState({ chat, message: { content: '' }});
//      })
//      .catch(err => console.log(err));
//  }
//
//   //   componentDidMount() {
//   //   Axios
//   //     .get(`/api/users/${this.props.match.params.id}/friends`, {
//   //       headers: { 'Authorization': `Bearer ${Auth.getToken()}`}
//   //     })
//   //     .then(res => {
//   //       console.log(res);
//   //     })
//   //     .catch(err => console.log(err));
//   // }
//   //
//   // handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   const message = this.state.message;
//   //
//   // }
//   //
//   // handleChange = (e) => {
//   //   this.setState({message: e.target.value});
//   // }
//
//   render() {
//     return(
//       <div>
//         <h1>Create chat</h1>
//         <ul id="messages">
//         </ul>
//         <form onSubmit={this.handleSubmit}>
//           <Input s={6}
//             type="text"
//             name="message"
//             onChange={this.handleChange}
//           />
//           <Button>Send Message</Button>
//         </form>
//       </div>
//     );
//   }
// }
//
// export default ChatsCreate;

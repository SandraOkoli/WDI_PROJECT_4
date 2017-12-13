import React from  'react';
import Axios from 'axios';

import Auth from '../../lib/Auth';
import { Input } from 'react-materialize';
// make a request for current users Friends
// update state when user is selected

class ChatsNew extends React.Component {
  state = {
    chat: {
      users: []
    }
  }

  componentDidMount() {
    Axios
      .get(`/api/users/${this.props.match.params.id}/friends`,{
        headers: { 'Authorization': `Bearer ${Auth.getToken()}`}
      })
      .then(res =>
        this.setState({
          friends: res.data,
          chat: ''

        }))
      .catch(err => console.log(err));
  }

  getFriends = () => {
    return this.state.friends.filter(friend => friend.status === 'accepted');
  }

// handleChange = (e) => {
//   this.setState({  });
//   }
// }

  render() {
    this.getFriends();
    return (
      <div>
        <form>
          <Input s={6}
            type="select"
            name="select"
            onChange={handleChange}
          >
            <option value=''>Send message to</option>
              {friends.map(friend => <option key={friend}>{friend}</option>)}
              </Input>
            </form>
      </div>
    );
  }
}


/// req.body.users.push(req.currentUser)
export default ChatsNew;

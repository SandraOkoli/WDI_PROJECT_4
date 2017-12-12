import React from 'react';
import Axios from 'axios';

import { Link } from 'react-router-dom';
import Auth from '../../lib/Auth';
import { Button } from 'react-materialize';

class FriendsIndex extends React.Component {
  state = {
    friends: []
  }
//status
//accepted - Your Friends
//pending - Accept(post) or Reject(put)
//requested - S

//   ('/users/:id/friends')
//   .get user.getFriends
//   .post user.requestFriends
//   .put user.removeFriends


  componentDidMount() {
    Axios
      .get(`/api/users/${this.props.match.params.id}/friends`,{
        headers: { 'Authorization': `Bearer ${Auth.getToken()}`}
      })
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.log(err));
  }

  getFriends = (status) => {
    return this.state.friends.filter(friend => friend.status === status);
  }

  acceptRequest = (friend) => {
    Axios
      .post(`/api/users/${friend.id}/friends`,{
        headers: { 'Authorization': `Bearer ${Auth.getToken()}`}
      })
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.log(err));
  }

  rejectRequest = (friend) => {
    Axios
      .put(`/api/users/${friend._id}/friends`, {
        headers: { 'Authorization': `Bearer ${Auth.getToken()}`}
      })
      .then(res => this.setState({friends: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <h1>Friend Requests</h1>
        <ul>
          {this.getFriends('accepted').map(friend => {
            return (
              <li key={friend._id}>
                <Link key={1} to={`/users/${friend._id}`}>{friend.friend.username}</Link>
                <Button onClick={() => this.acceptRequest(friend)}>Accept Request</Button>
                <Button onClick={() => this.rejectRequest(friend)}>Reject Request</Button>

                {/* {this.getFriends('pending').map(friend => {
                  <li><Link key={1} to={`/users/${friend.friend._id}`}>{friend.friend.username}</Link></li>
                })} */}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}


export default FriendsIndex;

import React from 'react';
import Axios from 'axios';

import { Link } from 'react-router-dom';
import Auth from '../../lib/Auth';
import { Button, Tabs, Tab } from 'react-materialize';

class FriendsIndex extends React.Component {
  state = {
    friends: []
  }

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
      .post(`/api/users/${friend._id}/friends`, {}, {
        headers: { 'Authorization': `Bearer ${Auth.getToken()}` }
      })
      .then(res => this.setState({friends: res.data }))
      .catch(err => console.log(err));
  }

  rejectRequest = (friend) => {
    Axios
      .put(`/api/users/${friend._id}/friends`, {}, {
        headers: { 'Authorization': `Bearer ${Auth.getToken()}`}
      })
      .then(res => {
        this.setState({ friends: res.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <h1>Friend Requests</h1>

        <Tabs className='tab-demo z-depth-1'>
          <Tab title="My Friends" active>
            <ul>
              { this.getFriends('accepted').length === 0 && <h3>Find some friends...</h3>}

              {this.getFriends('accepted').map(friend => {
                return (
                  <li key={friend._id}>
                    <Link key={1} to={`/users/${friend._id}`}>{friend.friend.username}</Link>
                    <Button onClick={() => this.rejectRequest(friend)}>Remove Friend</Button>
                  </li>
                );
              })}
            </ul>
          </Tab>

          <Tab title="Pending Friend Requests">
            <ul>
              { this.getFriends('pending').length === 0 && <h3>You have no pending requests</h3>}

              {this.getFriends('pending') && this.getFriends('pending').map(friend => {
                return (
                  <li key={friend._id}>
                    <Link key={1} to={`/users/${friend._id}`}>{friend.friend.username}</Link>
                    <Button onClick={() => this.acceptRequest(friend)}>Accept Request</Button>
                    <Button onClick={() => this.rejectRequest(friend)}>Reject Request</Button>
                  </li>
                );
              })}
            </ul>
          </Tab>
        </Tabs>
      </div>
    );
  }
}


export default FriendsIndex;

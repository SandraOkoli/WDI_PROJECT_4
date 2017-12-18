import React from 'react';
import Axios from 'axios';

import { Link } from 'react-router-dom';
import Auth from '../../lib/Auth';
import { Button, Tabs, Tab } from 'react-materialize';

class FriendsIndex extends React.Component {
  state = {
    friends: []
  }

  friendsImage = {
    borderRadius: '50px',
    width: '100px',
    height: '100px'
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
        <h3>Friend Requests</h3>

        <Tabs className='tab-demo z-depth-1'>
          <Tab title="My Friends" active>
            <ul>
              { this.getFriends('accepted').length === 0 && <h5>Find people to collaborate with...</h5>}

              {this.getFriends('accepted').map(friend => {
                return (
                  <li key={friend._id}>
                    <Link key={1} to={`/users/${friend._id}`}>{friend.friend.username}</Link>
                    <Link key={2} to={`/users/${friend._id}`}>{friend.friend.image}</Link>
                    <Button onClick={() => this.rejectRequest(friend)}>Remove Friend</Button>
                  </li>
                );
              })}
            </ul>
          </Tab>

          <Tab title="Pending Friend Requests">
            <ul>
              { this.getFriends('pending').length === 0 && <p>You have no pending requests</p>}

              {this.getFriends('pending') && this.getFriends('pending').map(friend => {
                return (
                  <li key={friend._id}>
                    <Link key={1} to={`/users/${friend._id}`}>{friend.friend.username}</Link>
                    <Link key={2} to={`/users/${friend._id}`}>{friend.friend.image}</Link>
                    <Button onClick={() => this.acceptRequest(friend)}>Accept Request</Button>
                    <Button onClick={() => this.rejectRequest(friend)}>Reject Request</Button>
                  </li>
                );
              })}
            </ul>
          </Tab>

          <Tab title="Sent Requests">
            <ul>
              { this.getFriends('requested').length === 0 && <p>You have no sent requests</p>}

              {this.getFriends('requested') && this.getFriends('requested').map(friend => {
                return (
                  <li key={friend._id}>
                    <Link key={1} to={`/users/${friend._id}`}><img src={friend.friend.image} className='avatar'/><p>{friend.friend.socialLinks}</p></Link>
                    {/* <Link key={2} to={`/users/${friend._id}`}><p>{friend.friend.username}</p></Link> */}
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

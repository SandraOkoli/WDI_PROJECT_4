import React from 'react';
import Axios from 'axios';

import Auth from '../../lib/Auth';
import { Link } from 'react-router-dom';
import { Row, Button } from 'react-materialize';
import SoundCloud from '../utils/SoundCloud';

class UserShow extends React.Component {
   state = {
     user: {}
   }

   componentDidMount() {
     Axios
       .get(`/api/users/${this.props.match.params.id}`)
       .then(res => this.setState({ user: res.data }))
       .catch(err => console.log(err));
   }

   makeFriendRequest = () => {
     Axios
       .post(`/api/users/${this.state.user.id}/friends`, {}, {
         headers: { 'Authorization': `Bearer ${Auth.getToken()}` }
       })
       .then(res => this.setState({friends: res.data }))
       .catch(err => console.log(err));
   }


   render() {
     return(
       <div className="container">
         <Row>
           {/* <Button><Link to={`/users/${this.state.user.id}/friends`}>Friends</Link></Button> */}
           <Button onClick={() => this.makeFriendRequest()}>Add {this.state.user.username}2 as a Friend</Button>
           <h3>{this.state.user.username}</h3>
           <img src={this.state.user.image} />
           <img src={this.state.user.avatar}/>
           <p>{this.state.user.bio}</p>
           <h4>{this.state.user.genre}</h4>
           <h4>{this.state.user.location}</h4>
           <h4>{this.state.user.ratings}</h4>
           <h4>{this.state.user.socialLinks}</h4>
           <Button>Send a message to {this.state.user.username}</Button>
           <Button><Link to ={`/users/${this.state.user.id}/edit`}>
           Edit Profile</Link></Button>

           <SoundCloud/>
         </Row>
       </div>
     );
   }
}

export default UserShow;

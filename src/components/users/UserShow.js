import React from 'react';
import Axios from 'axios';

import Auth from '../../lib/Auth';
import { Link } from 'react-router-dom';
import { Row, Button, Icon } from 'react-materialize';
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
           <h3>{this.state.user.username}</h3>
           <h5>{this.state.user.socialLinks}</h5>
           <div>
             <Button onClick={() => this.makeFriendRequest()}>Add {this.state.user.username} as a Friend</Button>
           </div>
           <div>
             <img src={this.state.user.image} />
             <h5>{this.state.user.genre}</h5>
             <h5><Icon>location_on</Icon>{this.state.user.location}</h5>
             <p>{this.state.user.bio}</p>
             <h5>{this.state.user.ratings}</h5>
             <Button><Icon>message</Icon> Send a message to {this.state.user.username}</Button>
             {/* <Button><Link to ={`/users/${this.state.user.id}/edit`}>
             Edit Profile</Link></Button> */}

             <SoundCloud/>
           </div>
         </Row>
       </div>
     );
   }
}

export default UserShow;

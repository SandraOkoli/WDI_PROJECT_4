import React from 'react';
import Axios from 'axios';


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

   //avatar
   //youtube iframe
   //username
   //location
   //ratings
   //connect button
   //Back button
   //embedded player
   //messages button

   render() {
     return(
       <div className="container">
         <Row>
           <img src={this.state.user.image} />
           <img src={this.state.user.avatar}/>
           <p>{this.state.user.bio}</p>
           <h4>{this.state.user.location}</h4>
           <h4>{this.state.user.ratings}</h4>
           {/* <p>{this.state.user.messages.content }</p> */}
           <Button>Send a message to {this.state.user.username}</Button>
           <Button><Link to ={`/users/${this.state.user.id}/edit`}>
           </Link></Button>
           <SoundCloud/>
         </Row>
       </div>
     );
   }
}

export default UserShow;

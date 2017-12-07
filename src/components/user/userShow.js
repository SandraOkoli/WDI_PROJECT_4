import React from 'react';
import Axios from 'axios';

import Auth from '../../lib/Auth';

class UserShow extends React.Component {
   state = {
     user: {}

   }

   componentWillMount() {
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
       <div className="row">
         <div className="image-title col-md-6">
           <img src={this.state.user.avatar} className="img-responsive" />
         </div>
         <div className="col-md-6">
           <h3>{this.state.user.avatar}</h3>
         </div>
       </div>
     );
   }
}

export default UserShow;

import React from 'react';
import Axios from 'axios';

import { Link } from 'react-router-dom';

class UserIndex extends React.Component {
  state = {
    users: []
  }

  componentDidMount() {
    Axios
      .get('/api/users')
      .then(res => this.setState({ users: res.data }))
      .catch(err => console.log(err));
  }
  render() {
    return(
      <div className="row">
        {this.state.users.map(user => {
          return(
            <div key={user.id} className="image-tile col-md-4 col-sm-6 col-xs-12">
              <img src={user.image} className="img-responsive" />
              <h2>{user.username}</h2>
              <h3>{user.type}</h3>
              <h3>{user.genre}</h3>
              <h3>{user.location}</h3>
              <Link to ={`/users/${user.id}`}>
                <button className="btn btn-primary">View Artist</button>
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}

export default UserIndex;

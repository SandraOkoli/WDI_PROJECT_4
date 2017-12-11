import React from 'react';
import Axios from 'axios';

import { Link } from 'react-router-dom';
import { Row, Card } from 'react-materialize';


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
    console.log(this.state.users);
    return(
      <Row>
        {this.state.users.map(user => {
          return(
            <div key={user.id}>
              <img src={user.image} />
              <h2>{user.username}</h2>
              <h3>{user.type.name}</h3>
              <h3>{user.genre.name}</h3>
              <h3>{user.location}</h3>
              <Link to ={`/users/${user.id}`}>
                <button className="btn btn-primary">View Artist</button>
              </Link>
            </div>
          );
        })}
      </Row>
    );
  }
}


export default UserIndex;

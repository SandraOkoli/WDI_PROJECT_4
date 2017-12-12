import React from 'react';
import Axios from 'axios';

import { Link } from 'react-router-dom';
import { Row, Card, CardTitle, Col } from 'react-materialize';


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
    // console.log(this.state.users);
    return(
      <Row>
        {this.state.users.map(user => {
          return(
            <div key={user.id}>
              <Col m={6} s={12} >
                <Card className ="medium"
                  header={<CardTitle image={user.image}></CardTitle>}
                  actions={[<Link key={1} to={`/users/${user.id}`}>View Artist</Link>]}> 
                  <a href={`/users/${user.id}`}>View Artist</a>
                  <p>{user.username}</p>
                  <p>{user.type}</p>
                  <p>{user.genre}</p>
                  <p>{user.location}</p>
                </Card>
              </Col>
            </div>
          );
        })}
      </Row>
    );
  }
}


export default UserIndex;

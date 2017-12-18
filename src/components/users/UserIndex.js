import React from 'react';
import Axios from 'axios';

import _ from 'lodash';
import { Link } from 'react-router-dom';
import { Row, Card, CardTitle, Col, Icon } from 'react-materialize';

import SearchBar from '../utils/SearchBar';

class UserIndex extends React.Component {
  state = {
    users: [],
    types: [],
    genres: [],
    skillLevels: [],
    locations: [],
    selectedType: 'all',
    selectedGenre: 'all',
    selectedSkillLevel: 'all',
    selectedLocation: 'all'

  }

  componentDidMount() {
    Axios
      .get('/api/users')
      .then(res => {
        const types = res.data.map(user => user.type);
        const genres = res.data.map(user => user.genre);
        const skillLevels = res.data.map(user => user.skillLevel);
        const locations = res.data.map(user => user.location);
        this.setState({
          users: res.data,
          types: _.uniq(types),
          genres: _.uniq(genres),
          skillLevels: _.uniq(skillLevels),
          locations: _.uniq(locations)
        // }, () => {
        //   // console.log('THIS.STATE', this.state);
        });
      });
  }

  handleFilterByType = (e) => {
    this.setState({ selectedType: e.target.value });
  }

  handleFilterByGenre = (e) => {
    this.setState({ selectedGenre: e.target.value });
  }

  handleFilterBySkillLevel = (e) => {
    this.setState({ selectedSkillLevel: e.target.value });
  }

  handleFilterByLocation = (e) => {
    this.setState({ selectedLocation: e.target.value });
  }

  getUsers = () => {
    // console.log('get users is called', this.state);
    const { users, selectedType, selectedGenre, selectedSkillLevel , selectedLocation } = this.state;
    const selectedUsers = _.filter(users, user => {
      return (user.type === selectedType || selectedType === 'all')
       && (user.genre === selectedGenre || selectedGenre === 'all')
       && (user.skillLevel === selectedSkillLevel || selectedSkillLevel === 'all')
       && (user.location === selectedLocation|| selectedLocation === 'all');

    });
    // console.log('SELECTEDUSERS in if statement', selectedUsers);
    return _.orderBy(selectedUsers, ['firstName']);
  }

  render() {
    const users = this.state.users.length > 0 ? this.getUsers() : [];
    console.log('THIS.STATE.USERS', this.state.users);
    return(
      <div className="container">
        <Row>
          <SearchBar
            types={this.state.types}
            genres={this.state.genres}
            skillLevels={this.state.skillLevels}
            locations={this.state.locations}
            handleFilterByType={this.handleFilterByType}
            handleFilterByGenre={this.handleFilterByGenre}
            handleFilterBySkillLevel={this.handleFilterBySkillLevel}
            handleFilterByLocation={this.handleFilterByLocation}
          />
          {users.map(user =>
          // return(
            <div key={user.id}>
              <Col m={4} s={12} >
                {/* <Card header={<CardTitle reveal image={user.image} waves='light'/>}
                title={user.username} reveal={ <p>{user.type}</p>}>
                <p><a href={[<Link key={1} to={`/users/${user.id}`}>This is a link</Link>]}></a></p>
              </Card> */}
                <Card className ="medium"
                  header={<CardTitle image={user.image}></CardTitle>}
                  actions={[<Link key={1} to={`/users/${user.id}`}>View Artist</Link>]}>
                  <h4>{user.username}</h4>
                  <h5>{user.type}</h5>
                  <p><Icon>music_note</Icon>{user.genre}</p>
                  <p><Icon>location_on</Icon>{user.location}</p>
                </Card>
              </Col>
            </div>)}
          {/* // ); */}
          {/* })} */}
        </Row>
      </div>
    );
  }
}




export default UserIndex;

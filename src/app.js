import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import Axios from 'axios';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './components/utils/Routes';
import NavBar from './components/utils/NavBar';
import SearchBar from './components/utils/SearchBar';

import './scss/style.scss';

class App extends React.Component {

state = {
  users: [],
  types: [],
  genres: [],
  skillLevels: [],
  locations: []
};

componentDidMount() {
  Axios.get('/api/users')
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
        locations: _.uniq(locations),
        selectedType: 'all',
        selectedGenre: 'all',
        selectedSkillLevel: 'all',
        selectedLocation: 'all'
      });
    });
}

// handleSearch = (e) => {
//   this.setState({ query: e.target.value });
// }

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

handleSort = (e) => {
  const [sortBy] = e.target.value.split('|');
  this.setState({ sortBy });
}

getUsers = () => {
  const { users, selectedType, selectedGenre, selectedSkillLevel, selectedLocation, sortBy } = this.state;
  const selectedUsers = _.filter(users, user => {
    return (user.type === selectedType || selectedType === 'all')
    && (user.genre === selectedGenre || selectedGenre === 'all')
    && (user.skillLevel === selectedSkillLevel || selectedSkillLevel === 'all')
    && (user.location === selectedLocation || selectedLocation === 'all');
  });
  // console.log(selectedUsers);
  return _.orderBy(selectedUsers, [sortBy]);
}

render() {
  this.getUsers();
  return (
    <Router>
      <div>
        <NavBar />
        {/* <SearchBar
          types={this.state.types}
          genres={this.state.genres}
          skillLevels={this.state.skillLevels}
          locations={this.state.locations}
          handleSearch={this.handleSearch}
          handleFilterByType={this.handleFilterByType}
          handleFilterByGenre={this.handleFilterByGenre}
          handleFilterBySkillLevel={this.handleFilterBySkillLevel}
          handleFilterByLocation={this.handleFilterByLocation}
          handleSort={this.handleSort}
        /> */}
        <Routes/>
      </div>
    </Router>
  );
}
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

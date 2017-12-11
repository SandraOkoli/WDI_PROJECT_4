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
  types: []
};

componentDidMount() {
  Axios.get('/api/users')
    .then(res => {
      const types = res.data.map(user => user.type.name);
      const uniqTypes = _.uniq(types);
      this.setState({ users: res.data , types: uniqTypes });
    });
}

// handleSearch = (e) => {
//   this.setState({ query: e.target.value });
// }

handleFilterByType = (e) => {
  this.setState({ selectedType: e.target.value });
}

handleSort = (e) => {
  const [sortBy] = e.target.value.split('|');
  this.setState({ sortBy });
}

getUsers = () => {
  const { users, selectedType, sortBy } = this.state;
  const selectedUsers = _.filter(users, user => user.type === selectedType || selectedType === 'all');
  console.log(selectedUsers);
  return _.orderBy(selectedUsers, [sortBy]);
}

render() {
  this.getUsers();
  return (
    <Router>
      <div>
        <SearchBar
          types={this.state.types}
          handleSearch={this.handleSearch}
          handleFilterByType={this.handleFilterByType}
          handleSort={this.handleSort}
        />
        <NavBar />
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

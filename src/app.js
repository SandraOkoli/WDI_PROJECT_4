import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './components/utils/Routes';
import NavBar from './components/utils/NavBar';


import './scss/style.scss';

class App extends React.Component {


  render() {
    return (
      <Router>
        <div>
          <header>
            <NavBar />
          </header>
          <main>
            <Routes/>
          </main>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

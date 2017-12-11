import React from 'react';
import Axios from 'axios';
import AutoSuggest from 'react-bootstrap-autosuggest';

class ChatsCreate extends React.Component {
  state = {
    users: [],
    friends: []
  }

  componentDidMount() {
    // get id from token <-- Auth.getPayload()
    // update state with current users friends
    
  }

  render() {
    return(
      <form>

      </form>
    );
  }
}

export default ChatsCreate;

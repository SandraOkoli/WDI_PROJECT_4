import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Register from '../auth/Register';
import Login from '../auth/Login';
import Homepage from '../utils/Homepage';
import UserIndex from '../users/UserIndex';
import UserShow from '../users/UserShow';
import UserEdit from '../users/UserEdit';
import ChatsIndex from '../chats/ChatsIndex';
import FriendsIndex from '../friends/FriendsIndex';
// import MessageNew from '../chats/MessageNew';
// import Auth from '../../lib/Auth';

const Routes = () => {
  return (
    //Switch returns only the 1st matching route rather than alll matching Routes.
    <Switch>
      <Route exact path ="/" component={ Homepage } />
      <Route path ="/register" component={Register} />
      <Route path ="/login" component={Login} />
      <Route path ="/users/:id/edit" component={UserEdit} />
      <Route path ="/users/:id/friends" component={FriendsIndex} />
      <Route path ="/users/:id" component={UserShow} />
      <Route path ="/users" component={UserIndex} />
      <Route path ="/chats" component={ChatsIndex} />
      {/* <Route path ="/chats/:id" component={MessageNew} /> */}
    </Switch>
  );
};

export default Routes;

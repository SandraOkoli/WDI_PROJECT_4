import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Register from '../auth/Register';
import Login from '../auth/Login';
// import Homepage from '../utils/Homepage';
import UserIndex from '../users/UserIndex';
import UserShow from '../users/UserShow';
import UserEditForm from '../users/UserEdit';
import ChatsCreate from '../chats/ChatsCreate';
import FriendsIndex from '../friends/FriendsIndex';
import MessageNew from '../chats/MessageNew';

const Routes = () => {
  return (
    //Switch returns only the 1st matching route rather than alll matching Routes.
    <Switch>
      {/* <Route exact path ="/" component={ Homepage } /> */}
      <Route path ="/register" component={Register} />
      <Route path ="/login" component={Login} />
      {/* <Route path ="/chats/:id/messages" component={MessageNew} />
      <Route path ="/chats/:id/new" component={ChatsCreate} /> */}
      <Route path ="/users/:id/edit" component={UserEditForm} />
      <Route path ="/users/:id/friends" component={FriendsIndex} />
      <Route path ="/users/:id" component={UserShow} />
      <Route path ="/users" component={UserIndex} />
    </Switch>
  );
};

export default Routes;

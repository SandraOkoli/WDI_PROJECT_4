import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Register from '../auth/Register';
import Login from '../auth/Login';
import UserIndex from '../user/UserIndex';
import UserShow from '../user/UserShow';
import UserEdit from '../user/UserEdit';

const Routes = () => {
  return (
    //Switch returns only the 1st matching route rather than alll matching Routes.
    <Switch>
      <Route path ="/register" component={ Register } />
      <Route path ="/login" component={ Login } />
      <Route exact path="/users" component={ UserIndex } />
      <Route exact path="/users/:id" component={ UserShow } />
      <Route exact path="/users/:id/edit" component={ UserEdit } />
    </Switch>
  );
};

export default Routes;

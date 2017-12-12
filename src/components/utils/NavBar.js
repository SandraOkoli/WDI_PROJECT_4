import React from 'react';
import Auth from '../../lib/Auth';
import { withRouter  } from 'react-router-dom';

import { Navbar, NavItem, Icon, SideNav, SideNavItem, Button } from 'react-materialize';

const NavBar = ({ history }) => {

  function logout(e) {
    e.preventDefault();

    Auth.logout();
    history.push('/');
  }

  return (
    <Navbar brand='logo' right>
      <NavItem href='#'><Icon>search</Icon></NavItem>

      <SideNav trigger={<Button>menu</Button>}
        options={{ closeOnClick: true }}
      >
        <SideNavItem userView
          user={{
            background: 'https://lh5.ggpht.com/kvswWeqQPJYFZbHQlQPswxIeAOZ-U6JQR5YQ1OYjobK9oT8bvNmptVXJbfwVZS1xnQeg=h900',
            image: '',
            name: 'John Doe',
            email: 'jdandturk@gmail.com'
          }}
        />
        <SideNavItem href='#'>First Link With Icon</SideNavItem>
        <SideNavItem href='#'>Second Link</SideNavItem>
        <SideNavItem divider />
        { Auth.isAuthenticated() && <SideNavItem href=''>Edit Profile</SideNavItem>}
        { Auth.isAuthenticated() && <SideNavItem waves href='#'>Messages</SideNavItem>}
        { Auth.isAuthenticated() && <SideNavItem href='#'>Friends</SideNavItem>}
        { !Auth.isAuthenticated() && <NavItem href="/register">Register</NavItem>}
        { !Auth.isAuthenticated() && <NavItem href='/login'>Login</NavItem>}
        { Auth.isAuthenticated() && <SideNavItem onClick={logout}>Logout</SideNavItem>}
      </SideNav>
    </Navbar>
  );
};

export default withRouter(NavBar);

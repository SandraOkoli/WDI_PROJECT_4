import React from 'react';
import Auth from '../../lib/Auth';
// import { Link } from 'react-router-dom';

import { Navbar, NavItem, Icon, SideNav, SideNavItem, Button } from 'react-materialize';

const NavBar = () => {

  const logout = (e) => {
    e.preventDefault();
    Auth.logout();
  };

  return (
    <Navbar brand='logo' right>
      <NavItem href='#'><Icon>search</Icon></NavItem>
      <NavItem href='get-started.html'><Icon>menu</Icon></NavItem>
      <SideNav trigger={<Button>menu</Button>}
        options={{ closeOnClick: true }}
      >
        <SideNavItem userView
          user={{
            background: '',
            image: '',
            name: 'John Doe',
            email: 'jdandturk@gmail.com'
          }}
        />
        <SideNavItem href='#!icon' icon='cloud'>First Link With Icon</SideNavItem>
        <SideNavItem href='#!second'>Second Link</SideNavItem>
        <SideNavItem divider />
        <SideNavItem subheader>Edit Profile</SideNavItem>
        <SideNavItem waves href='#!third'>Messages</SideNavItem>
        {/* {Auth.isAuthenticated() && <SideNavItem href={logout}}>Logout</SideNavItem> */}
        {Auth.isAuthenticated() && <a href='#' onClick={logout}>Logout</a>}
      </SideNav>
    </Navbar>
  );
};

export default NavBar;

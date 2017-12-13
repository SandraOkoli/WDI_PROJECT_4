import React from 'react';
import Auth from '../../lib/Auth';
import { withRouter  } from 'react-router-dom';

import { Navbar, NavItem, Icon, SideNav, SideNavItem, Button } from 'react-materialize';

const NavBar = ({ history }) => {
  //#666666
  const navStyles = {
    backgroundColor: '#524d55',
    color: 'white',
    border: 'none',
    width: '100%',
    height: '64px',
    lineHeight: '64px'
  };

  function logout(e) {
    e.preventDefault();

    Auth.logout();
    history.push('/');
  }

  return (
    <div>
      <div style={navStyles}></div>
      <SideNav trigger={<Button>menu</Button>}
        options={{ closeOnClick: true }}
      >
        <SideNavItem userView
          user={{
            background: 'https://lh5.ggpht.com/kvswWeqQPJYFZbHQlQPswxIeAOZ-U6JQR5YQ1OYjobK9oT8bvNmptVXJbfwVZS1xnQeg=h900',
            image: '',
            name: '',
            email: ''
          }}
        />
        <SideNavItem href='/users'>Find collaborators</SideNavItem>
        {/* <SideNavItem href='#'>Second Link</SideNavItem> */}
        <SideNavItem divider />
        { Auth.isAuthenticated() && <SideNavItem href={`/users/${Auth.getPayload().userId}/edit`}>Edit Profile</SideNavItem>}
        { Auth.isAuthenticated() && <SideNavItem waves href='#'>Messages</SideNavItem>}
        { Auth.isAuthenticated() && <SideNavItem href={`/users/${Auth.getPayload().userId}/friends`}>Friends</SideNavItem>}
        { !Auth.isAuthenticated() && <NavItem href='/login'>Login</NavItem>}
        { !Auth.isAuthenticated() && <NavItem href="/register">Register</NavItem>}
        { Auth.isAuthenticated() && <SideNavItem onClick={logout}>Logout</SideNavItem>}
      </SideNav>
    </div>
  );
};

export default withRouter(NavBar);

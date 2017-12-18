import React from 'react';
import Auth from '../../lib/Auth';
import { withRouter  } from 'react-router-dom';

import { NavItem, Icon, SideNav, SideNavItem, Button } from 'react-materialize';

const NavBar = ({ history }) => {
  //#666666
  const navStyles = {
    backgroundColor: '#0079BF',
    color: 'white',
    border: 'none',
    width: '100%',
    height: '64px',
    position: 'absolute',
    top: '0',
    lineHeight: '64px'
  };

  const burgerMenu = {
    textDecoration: 'none',
    backgroundColor: '#0079BF',
    textAlign: 'center',
    transition: '.2s ease-out',
    cursor: 'pointer',
    position: 'absolute',
    right: '0',
    border: 'none',
    fontSize: '2.5rem',
    borderRadius: '0',
    boxShadow: 'none',
    paddingTop: '4px'
  };

  const logo = {
    width: '70px',
    height: '70px',
    zIndex: '1',
    position: 'absolute',
    marginLeft: '15px',
    top: '0',
    padding: '6px'
  };

  function logout(e) {
    e.preventDefault();

    Auth.logout();
    history.push('/');
  }

  return (
    <div>
      <img style={logo} src="https://image.ibb.co/bzqJC6/logo_1.png" />
      <div style={navStyles}></div>
      <SideNav trigger={<Button style={burgerMenu}><Icon>menu</Icon></Button>}
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
        <SideNavItem href='/users'><Icon>search</Icon>Find collaborators</SideNavItem>
        <SideNavItem divider />
        { Auth.isAuthenticated() && <SideNavItem href={`/users/${Auth.getPayload().userId}/edit`}><Icon>person</Icon>Edit Profile</SideNavItem>}
        { Auth.isAuthenticated() && <SideNavItem waves href="/chats"><Icon>message</Icon>Messages</SideNavItem>}
        { Auth.isAuthenticated() && <SideNavItem href={`/users/${Auth.getPayload().userId}/friends`}><Icon>people</Icon>Friends</SideNavItem>}
        { !Auth.isAuthenticated() && <NavItem href='/login'>Login</NavItem>}
        { !Auth.isAuthenticated() && <NavItem href="/register">Register</NavItem>}
        { Auth.isAuthenticated() && <SideNavItem onClick={logout}><Icon>exit_to_app</Icon>Logout</SideNavItem>}
      </SideNav>
    </div>
  );
};

export default withRouter(NavBar);

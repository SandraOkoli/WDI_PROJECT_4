import React from 'react';
import Auth from '../../lib/Auth';
import { withRouter  } from 'react-router-dom';

import { NavItem, Icon, SideNav, SideNavItem, Button } from 'react-materialize';

const NavBar = ({ history }) => {

  const burgerMenu = {
    height: '60px',
    textDecoration: 'none',
    background: 'none',
    color: '#000',
    transition: '.2s ease-out',
    cursor: 'pointer',
    position: 'absolute',
    right: '0',
    top: '0',
    boxShadow: 'none'
  };

  const logo = {
    height: '70px',
    marginLeft: '15px',
    top: '0',
    left: '0',
    position: 'absolute',
    padding: '6px'
  };

  const i = {
    fontSize: '3rem'
  };

  function logout(e) {
    e.preventDefault();

    Auth.logout();
    history.push('/');
  }

  return (

    <div>
      <img style={logo} src="https://image.ibb.co/bzqJC6/logo_1.png" />
      <SideNav trigger={<Button style={burgerMenu}><Icon style={i}>menu</Icon></Button>}
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

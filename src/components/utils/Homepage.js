import React from 'react';
import { Button, Footer } from 'react-materialize';
import { Link } from 'react-router-dom';

const logo = {
  position: 'absolute',
  zIndex: '30',
  margin: '80px'
};

const h2 = {
  color: 'white',
  position: 'absolute',
  zIndex: '50',
  margin: '20px',
  paddingTop: '300px',
  marginBottom: '20px',
  textAlign: 'center',
  backgroundSize: 'cover',
  backgroundPosition: ''
};

const buttonStyle = {
  borderRadius: '4px',
  padding: '4px',
  position: 'absolute'
};


const Homepage = () => {
  return(
    <div>
      <img style={logo} src="https://image.ibb.co/bzqJC6/logo_1.png" />
      <h2 style={h2}>Connect & Collaborate with music artists, songwriters and producers around the world</h2>
      <img src="http://sendemo.net/images/Ron_Header2.jpg" />
      <div style={buttonStyle}><Link to='/login'>Login</Link></div>
      <Button><Link to="/register">Register</Link></Button>

      <Footer copyrights="&copy Muse 2017" moreLinks={<a className="grey-text text-lighten-4 right" href="#!">More Links</a>}
        links={
          <ul>
            <li><a className="grey-text text-lighten-3" href="#!">About</a></li>
            <li><a className="grey-text text-lighten-3" href="#!">Share</a></li>
            <li><a className="grey-text text-lighten-3" href="#!">Facebook</a></li>
            <li><a className="grey-text text-lighten-3" href="#!">Twitter</a></li>
          </ul>
        } className='example'
      >
        <h5 className="white-text">Footer Content</h5>
        <p className="grey-text text-lighten-4">.</p>
      </Footer>
    </div>
  );
};



export default Homepage;

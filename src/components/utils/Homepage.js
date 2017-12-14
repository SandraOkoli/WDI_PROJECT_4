import React from 'react';

import { Button, Row } from 'react-materialize';

const homeStyles = {
  backgroundImage: 'url("http://theaudioperv.com/wp-content/uploads/2010/10/EdwardSharpe-copy.jpg")',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  color: 'white',
  border: 'none',
  width: '100%'
};


const Homepage = () => {
  return(
    <div style={homeStyles}>
      {/* <Row> */}
      <img src="https://image.ibb.co/bzqJC6/logo_1.png" />
      <Button href="/login">Login</Button>
      <Button href="/register">Register</Button>
      {/* </Row> */}
    </div>
  );
};


export default Homepage;

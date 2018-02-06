import React from 'react';


const h2 = {
  fontSize: '3rem',
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

const backgroundImg = {
  height: '100vh'
};



const Homepage = () => {
  return(
    <div>
      <h2 style={h2}>Connect & Collaborate with music artists, songwriters and producers around the world</h2>
      <img style={backgroundImg} src="https://preview.ibb.co/kgKetx/Muisc_Background_1920x1080.png"
      />
    </div>
  );
};



export default Homepage;

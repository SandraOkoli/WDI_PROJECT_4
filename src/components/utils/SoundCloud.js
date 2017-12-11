import React from 'react';

const SoundCloud = () => {
  return(
    <div>
      <iframe id="sc-widget" src="https://w.soundcloud.com/player/?url=http://api.soundcloud.com/users/1539950/favorites" width="100%"
        height="465"
        scrolling="no"
        frameBorder="no">
      </iframe>
      <script src="https://w.soundcloud.com/player/api.js" type="text/javascript"></script>
    </div>
  );
};

export default SoundCloud;

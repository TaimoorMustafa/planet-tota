import React from 'react';
import 'lion-player/dist/lion-skin.min.css';
import { LionPlayer } from 'lion-player';

function VideoPlayer(props) {

  return (
    <>
      {props.poster ?
        <LionPlayer
          sources={props.source}
          muted
          height={'700px'}
          autoplay={false}
          poster={props.poster}
          bigPlayButton={true}
          notSupportedMessage='Format Not Supported'
        />
        :
        <LionPlayer
          sources={props.source}
          muted
          height={'700px'}
          autoplay={false}
          bigPlayButton={true}
          notSupportedMessage='Format Not Supported'
        />
      }
    </>
  );
}

export default VideoPlayer;
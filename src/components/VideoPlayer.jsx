import React from 'react';

function VideoPlayer({ src, style = {}, controls = true, autoPlay = false, loop = false }) {
  return (
    <video
      src={src}
      controls={controls}
      autoPlay={autoPlay}
      loop={loop}
      style={{
        height: '150px',
        width: '850px',
        objectFit: 'cover',
        display: 'block',
        margin: "0 0 8px 0",
        ...style // This allows custom styles to override the defaults
      }}
    />
  );
}

export default VideoPlayer;
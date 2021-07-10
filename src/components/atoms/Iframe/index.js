import React from 'react';

const Iframe = ({ src }) => {
  return (
    <iframe
      id="inlineFrameExample"
      title="Inline Frame Example"
      width="300"
      height="200"
      src={src}
    ></iframe>
  );
};

export default Iframe;

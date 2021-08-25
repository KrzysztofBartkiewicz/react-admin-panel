import React, { useEffect, useState, useRef } from 'react';
import { Base64 } from 'js-base64';
import { StyledSingleEmail } from './StyledSingleEmail';

const SingleEmail = ({ location }) => {
  const { messagesArr } = location.state;
  const containerRef = useRef(null);
  const [email, setEmail] = useState(null);

  useEffect(() => {
    console.log(messagesArr);
  }, []);

  useEffect(() => {}, [email]);

  return <StyledSingleEmail></StyledSingleEmail>;
};

export default SingleEmail;

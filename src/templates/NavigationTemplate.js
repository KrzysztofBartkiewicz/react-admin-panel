import React from 'react';
import Navbar from '../components/organisms/Navbar';

const NavigationTemplate = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default NavigationTemplate;

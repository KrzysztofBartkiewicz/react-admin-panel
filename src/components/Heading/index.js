import React from 'react';
import { StyledH1, StyledH2, StyledH3, StyledH4 } from './StyledHeading';

const Heading = ({ headingType, children }) => {
  const renderHeading = () => {
    switch (headingType) {
      case 'h1':
        return <StyledH1>{children}</StyledH1>;
      case 'h2':
        return <StyledH2>{children}</StyledH2>;
      case 'h4':
        return <StyledH4>{children}</StyledH4>;
      default:
        return <StyledH3>{children}</StyledH3>;
    }
  };

  return <>{renderHeading()}</>;
};

export default Heading;

import React from 'react';
import { StyledParagraph } from './StyledParagraph';

const Paragraph = ({ size, weight, children }) => {
  return (
    <StyledParagraph size={size} weight={weight}>
      {children}
    </StyledParagraph>
  );
};

export default Paragraph;

import React from 'react';
import { StyledParagraph } from './StyledParagraph';

const Paragraph = ({ size, weight, children, color }) => {
  return (
    <StyledParagraph color={color} size={size} weight={weight}>
      {children}
    </StyledParagraph>
  );
};

export default Paragraph;

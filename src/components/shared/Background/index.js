import React from 'react';
import Logo from '../Logo';
import Paragraph from '../Paragraph';
import {
  StyledBg,
  StyledBgInner,
  StyledLogoWrapper,
  StyledHeading,
} from './StyledBackground';

const Background = () => {
  return (
    <StyledBg>
      <StyledBgInner>
        <StyledLogoWrapper>
          <StyledHeading>Welcome to</StyledHeading>
          <Logo big />
        </StyledLogoWrapper>
        <Paragraph color="white" size="xl">
          Login to access Your account
        </Paragraph>
      </StyledBgInner>
    </StyledBg>
  );
};

export default Background;

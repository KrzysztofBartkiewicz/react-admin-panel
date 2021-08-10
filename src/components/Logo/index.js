import React from 'react';
import iconsTypes from '../../helpers/iconsTypes';
import { StyledLogo, StyledLogoText } from './StyledLogo';

const Logo = () => {
  const { LogoIcon } = iconsTypes;

  return (
    <StyledLogo>
      <LogoIcon />
      <StyledLogoText>XdDash</StyledLogoText>
    </StyledLogo>
  );
};

export default Logo;

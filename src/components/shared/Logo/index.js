import React from 'react';
import iconsTypes from '../../../helpers/iconsTypes';
import { StyledLogo, StyledLogoText } from './StyledLogo';

const Logo = ({ color, className, big }) => {
  const { LogoIcon } = iconsTypes;

  return (
    <StyledLogo className={className}>
      <LogoIcon
        fill={color ? color : '#ffffff'}
        style={big && { width: '6rem', height: '6rem' }}
      />
      <StyledLogoText big={big} color={color}>
        XdDash
      </StyledLogoText>
    </StyledLogo>
  );
};

export default Logo;

import React from 'react';
import { StyledNavLink, StyledLeftBorder } from './StyledNavLink';

const NavigationLink = ({ icon: Icon, children, to, exact, iconOnly }) => {
  return (
    <StyledNavLink to={to} exact={exact}>
      <StyledLeftBorder />
      {Icon && <Icon />}
      {iconOnly ? null : children}
    </StyledNavLink>
  );
};

export default NavigationLink;

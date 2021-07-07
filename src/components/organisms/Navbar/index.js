import React from 'react';
import Logo from '../../atoms/Logo';
import NavigationLink from '../../atoms/NavigationLink';
import iconsTypes from '../../../helpers/iconsTypes';
import routes from '../../../router/routes';
import {
  StyledNavbar,
  StyledUserWrapper,
  StyledLogoWrapper,
  StyledNavItem,
} from './StyledNavbar';

const Navbar = () => {
  return (
    <StyledNavbar>
      <StyledLogoWrapper>
        <Logo />
      </StyledLogoWrapper>

      <ul>
        <StyledNavItem>
          <NavigationLink exact to={routes.home} icon={iconsTypes.HouseIcon}>
            Home
          </NavigationLink>
        </StyledNavItem>

        <StyledNavItem>
          <NavigationLink to={routes.orders} icon={iconsTypes.FolderIcon}>
            Orders
          </NavigationLink>
        </StyledNavItem>

        <StyledNavItem>
          <NavigationLink to={routes.charts} icon={iconsTypes.ChartIcon}>
            Charts
          </NavigationLink>
        </StyledNavItem>

        <StyledNavItem>
          <NavigationLink to={routes.filter} icon={iconsTypes.SettingsIcon}>
            Filter
          </NavigationLink>
        </StyledNavItem>

        <StyledNavItem>
          <NavigationLink
            to={routes.settings}
            icon={iconsTypes.SettingsAltIcon}
          >
            Settings
          </NavigationLink>
        </StyledNavItem>
      </ul>

      <StyledUserWrapper></StyledUserWrapper>
    </StyledNavbar>
  );
};

export default Navbar;

import React from 'react';
import Logo from '../Logo';
import NavigationLink from '../NavigationLink';
import iconsTypes from '../../helpers/iconsTypes';
import routes from '../../router/routes';
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
          <NavigationLink to={routes.mailbox} icon={iconsTypes.ChartIcon}>
            Mailbox
          </NavigationLink>
        </StyledNavItem>

        <StyledNavItem>
          <NavigationLink to={routes.deleted} icon={iconsTypes.CancelIcon}>
            Recycle Bin
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

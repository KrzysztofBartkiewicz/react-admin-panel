import React from 'react';
import Logo from '../../atoms/Logo';
import NavigationLink from '../../atoms/NavigationLink';
import iconsTypes from '../../../helpers/iconsTypes';
import routes from '../../../router/routes';
import {
  StyledNavbar,
  StyledUserWrapper,
  StyledLogoWrapper,
  StyledNavList,
  StyledNavItem,
} from './StyledNavbar';

const Navbar = () => {
  return (
    <StyledNavbar>
      <StyledLogoWrapper>
        <Logo />
      </StyledLogoWrapper>

      <StyledNavList>
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
        {/* <StyledNavItem>
          <NavLink icon={iconsTypes.FolderIcon}>Orders</NavLink>
        </StyledNavItem>

        <StyledNavItem>
          <NavLink icon={iconsTypes.ChartIcon}>Charts</NavLink>
        </StyledNavItem> */}
      </StyledNavList>

      <StyledUserWrapper></StyledUserWrapper>
    </StyledNavbar>
  );
};

export default Navbar;

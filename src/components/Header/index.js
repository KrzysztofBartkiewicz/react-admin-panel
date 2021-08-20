import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import { StyledHeader } from './StyledHeader';
import Auth2Context from '../../context/Auth2Context';

const Header = () => {
  const { signIn, signOut } = useContext(Auth2Context);

  return (
    <StyledHeader>
      <Button variant="contained" color="primary" onClick={signIn}>
        Login
      </Button>
      <Button variant="contained" color="secondary" onClick={signOut}>
        Logout
      </Button>
    </StyledHeader>
  );
};

export default Header;

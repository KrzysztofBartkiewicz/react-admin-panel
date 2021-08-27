import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import { Auth2Context, AuthContext } from '../../context';
import { StyledHeader, useStyles } from './StyledHeader';

const Header = () => {
  const { currentUser, signUpWithGoogle, logOut } = useContext(AuthContext);
  const { gapiLogIn, gapiLogOut } = useContext(Auth2Context);
  const classes = useStyles();

  return (
    <StyledHeader>
      <Button onClick={gapiLogOut}>Logout</Button>
      <Button onClick={gapiLogIn}>Login</Button>
      {currentUser ? (
        <Button variant="contained" color="secondary" onClick={logOut}>
          Logout
        </Button>
      ) : (
        <Button variant="contained" color="primary" onClick={signUpWithGoogle}>
          Login
        </Button>
      )}
    </StyledHeader>
  );
};

export default Header;

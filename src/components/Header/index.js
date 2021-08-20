import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Auth2Context from '../../context/Auth2Context';
import { StyledHeader, useStyles } from './StyledHeader';

const Header = () => {
  const { signIn, signOut, currentUser } = useContext(Auth2Context);
  const classes = useStyles();

  return (
    <StyledHeader>
      {currentUser &&
        (currentUser.id === process.env.REACT_APP_ADMIN_ID ? (
          <Avatar className={classes.orange}>
            {currentUser.name[0].toUpperCase()}
          </Avatar>
        ) : (
          <Avatar className={classes.purple}>
            {currentUser.name[0].toUpperCase()}
          </Avatar>
        ))}
      {currentUser ? (
        <Button variant="contained" color="secondary" onClick={signOut}>
          Logout
        </Button>
      ) : (
        <Button variant="contained" color="primary" onClick={signIn}>
          Login
        </Button>
      )}
    </StyledHeader>
  );
};

export default Header;

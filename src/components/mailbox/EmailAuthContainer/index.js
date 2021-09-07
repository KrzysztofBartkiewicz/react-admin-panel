import React, { useContext } from 'react';
import { Button } from '@material-ui/core';
import { Auth2Context } from '../../../context';
import { StyledContainer, StyledLoginInfo } from './StyledEmailAuthContainer';

const EmailAuthContainer = () => {
  const { adminUser, gapiLogIn, gapiLogOut } = useContext(Auth2Context);

  return (
    <StyledContainer>
      {adminUser ? (
        <>
          <Button onClick={gapiLogOut} variant="contained" color="secondary">
            Logout from mailbox
          </Button>
          <StyledLoginInfo>
            You're logged to <span>{adminUser.email}</span>
          </StyledLoginInfo>
        </>
      ) : (
        <Button onClick={gapiLogIn} variant="contained" color="primary">
          Login to mailbox
        </Button>
      )}
    </StyledContainer>
  );
};

export default EmailAuthContainer;

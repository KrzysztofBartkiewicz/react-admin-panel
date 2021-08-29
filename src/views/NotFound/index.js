import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { Redirect } from 'react-router';
import routes from '../../router/routes';
import { StyledBtnWrapper, StyledNotFound } from './StyledNotFound';

const NotFound = () => {
  const [isRedirecting, setRedirecting] = useState(false);

  return (
    <>
      {isRedirecting ? (
        <Redirect to={{ pathname: routes.home }} />
      ) : (
        <StyledNotFound>
          <StyledBtnWrapper>
            <Button
              onClick={() => setRedirecting(true)}
              variant="contained"
              color="primary"
            >
              Go back
            </Button>
          </StyledBtnWrapper>
        </StyledNotFound>
      )}
    </>
  );
};

export default NotFound;

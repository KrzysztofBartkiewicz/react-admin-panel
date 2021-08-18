import React from 'react';
import { CircularProgress } from '@material-ui/core';
import { StyledSpinner } from './StyledSpinner';

const Spinner = () => {
  return (
    <StyledSpinner>
      <CircularProgress />
    </StyledSpinner>
  );
};

export default Spinner;

import React from 'react';
import { ArrowLeft, ArrowRight } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';
import { StyledPagination } from './StyledPagination';

const Pagination = ({ onClick }) => {
  return (
    <StyledPagination>
      <IconButton onClick={() => onClick('left')}>
        <ArrowLeft style={{ fontSize: 40 }} />
      </IconButton>
      <IconButton onClick={() => onClick('right')}>
        <ArrowRight style={{ fontSize: 40 }} />
      </IconButton>
    </StyledPagination>
  );
};

export default Pagination;

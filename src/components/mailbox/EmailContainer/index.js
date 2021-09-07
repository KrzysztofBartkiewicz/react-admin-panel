import React, { useState } from 'react';
import EmailList from '../EmailList';
import Pagination from '../../shared/Pagination';
import { StyledContainer } from './StyledEmailContainer';

const threadsByPage = 15;

const EmailContainer = ({ threads }) => {
  const [pagination, setPagination] = useState(threadsByPage);

  const handlePagination = (dir) => {
    if (dir === 'left' && pagination !== threadsByPage) {
      setPagination((prev) => prev - threadsByPage);
    } else if (dir === 'right' && threads.length > pagination) {
      setPagination((prev) => prev + threadsByPage);
    }
  };

  return (
    <StyledContainer>
      <Pagination onClick={handlePagination} />
      {threads && (
        <EmailList
          items={threads}
          pagination={pagination}
          itemsByPage={threadsByPage}
        />
      )}
    </StyledContainer>
  );
};

export default EmailContainer;

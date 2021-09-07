import React, { useContext, useEffect, useState } from 'react';
import Pagination from '../../components/shared/Pagination';
import MailboxNav from '../../components/mailbox/MailboxNav';
import EmailList from '../../components/mailbox/EmailList';
import { useDispatch, useSelector } from 'react-redux';
import { getThreads } from '../../redux/gmailReducer/selectors';
import { Auth2Context } from '../../context';
import { Button } from '@material-ui/core';
import {
  StyledMailbox,
  StyledEmailContainer,
  StyledMailboxWrapper,
  StyledAuthWrapper,
  StyledLoginInfo,
} from './StyledMailbox';

const threadsByPage = 15;

const Mailbox = () => {
  const threads = useSelector(getThreads);
  const dispatch = useDispatch();
  const { gapiLogIn, gapiLogOut, adminUser, isClientInitialized } =
    useContext(Auth2Context);

  const [pagination, setPagination] = useState(threadsByPage);
  const [activeLabel, setActiveLabel] = useState('INBOX');
  const [threadsToRender, setThreadsToRender] = useState(null);

  useEffect(() => {
    const getThreads = (label) =>
      threads.filter((thread) =>
        thread.messagesArr[0].labelIds.includes(label)
      );

    setThreadsToRender(getThreads(activeLabel));
  }, [activeLabel, threads]);

  const handlePagination = (dir) => {
    if (dir === 'left' && pagination !== threadsByPage) {
      setPagination((prev) => prev - threadsByPage);
    } else if (dir === 'right' && threadsToRender.length > pagination) {
      setPagination((prev) => prev + threadsByPage);
    }
  };

  const handleClickLabel = (label) => {
    setActiveLabel(label);
    setPagination(threadsByPage);
  };

  return (
    <StyledMailbox>
      {isClientInitialized && (
        <StyledAuthWrapper>
          {adminUser ? (
            <>
              <Button
                onClick={gapiLogOut}
                variant="contained"
                color="secondary"
              >
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
        </StyledAuthWrapper>
      )}

      <StyledMailboxWrapper>
        <MailboxNav onClick={handleClickLabel} activeLabel={activeLabel} />
        <StyledEmailContainer>
          <Pagination onClick={handlePagination} />
          {threadsToRender && (
            <EmailList
              items={threadsToRender}
              pagination={pagination}
              itemsByPage={threadsByPage}
            />
          )}
        </StyledEmailContainer>
      </StyledMailboxWrapper>
    </StyledMailbox>
  );
};

export default Mailbox;

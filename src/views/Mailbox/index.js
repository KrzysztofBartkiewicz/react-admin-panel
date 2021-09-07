import React, { useContext, useEffect, useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Pagination from '../../components/shared/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { setIsThreadChecked } from '../../redux/gmailReducer/actions';
import { getThreads } from '../../redux/gmailReducer/selectors';
import { Auth2Context } from '../../context';
import { Button } from '@material-ui/core';
import {
  StyledMailbox,
  StyledMailContainer,
  StyledListItem,
  StyledFrom,
  StyledDate,
  StyledItemContainer,
  StyledMailboxWrapper,
  StyledAuthWrapper,
  StyledLoginInfo,
} from './StyledMailbox';
import MailboxNav from '../../components/mailbox/MailboxNav';

const threadsByPage = 15;

const makeShorter = (str, length) => {
  if (str.length > length) {
    return str.slice(0, length).concat('...');
  } else {
    return str;
  }
};

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

  const handleChange = (id) => {
    dispatch(setIsThreadChecked(id));
  };

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
        <StyledItemContainer>
          <StyledMailContainer>
            <Pagination onClick={handlePagination} />

            {threadsToRender &&
              threadsToRender.map(
                ({ id, subject, date, from, isChecked, messagesArr }, index) =>
                  index >= pagination - threadsByPage && index < pagination ? (
                    <StyledListItem
                      unread={messagesArr[0].labelIds.includes('UNREAD')}
                      key={id}
                    >
                      <Checkbox
                        color="primary"
                        checked={isChecked}
                        onChange={() => handleChange(id)}
                      />
                      <StyledFrom>
                        {makeShorter(from, 20)
                          .split(' ')
                          .filter((word) => word[0] !== '<')
                          .join(' ')}
                      </StyledFrom>
                      <span>{makeShorter(subject, 80)}</span>
                      <StyledDate>{date}</StyledDate>
                    </StyledListItem>
                  ) : null
              )}
          </StyledMailContainer>
        </StyledItemContainer>
      </StyledMailboxWrapper>
    </StyledMailbox>
  );
};

export default Mailbox;

{
  /* <StyledLink
                to={{
                  // pathname: `${routes.singleEmail}/${id}`,
                  state: { messagesArr },
                }} */
}
// index >= pagination - threadsByPage && index < pagination

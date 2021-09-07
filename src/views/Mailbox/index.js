import React, { useContext, useEffect, useState } from 'react';
import MailboxNav from '../../components/mailbox/MailboxNav';
import EmailContainer from '../../components/mailbox/EmailContainer';
import EmailAuthContainer from '../../components/mailbox/EmailAuthContainer';
import { useSelector } from 'react-redux';
import { getThreads } from '../../redux/gmailReducer/selectors';
import { Auth2Context } from '../../context';
import { StyledMailbox, StyledMailboxWrapper } from './StyledMailbox';

const Mailbox = () => {
  const threads = useSelector(getThreads);
  const { isClientInitialized } = useContext(Auth2Context);

  const [activeLabel, setActiveLabel] = useState('INBOX');
  const [threadsToRender, setThreadsToRender] = useState(null);

  useEffect(() => {
    const getThreads = (label) =>
      threads.filter((thread) =>
        thread.messagesArr[0].labelIds.includes(label)
      );

    setThreadsToRender(getThreads(activeLabel));
  }, [activeLabel, threads]);

  const handleClickLabel = (label) => {
    setActiveLabel(label);
  };

  return (
    <StyledMailbox>
      {isClientInitialized && <EmailAuthContainer />}
      <StyledMailboxWrapper>
        <MailboxNav onClick={handleClickLabel} activeLabel={activeLabel} />
        <EmailContainer threads={threadsToRender} />
      </StyledMailboxWrapper>
    </StyledMailbox>
  );
};

export default Mailbox;

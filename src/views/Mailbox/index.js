import React, { useContext, useRef, useEffect, useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import routes from '../../router/routes';
import { ArrowLeft, ArrowRight } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { setIsThreadChecked } from '../../redux/gmailReducer/actions';
import { getThreads } from '../../redux/gmailReducer/selectors';
import { Button, IconButton } from '@material-ui/core';
import {
  StyledMailbox,
  StyledMailContainer,
  StyledLink,
  StyledNav,
  StyledMailIcon,
  StyledSentIcon,
  StyledDraftIcon,
  StyledTrashIcon,
  useStyles,
  StyledListItem,
  StyledFrom,
  StyledDate,
  StyledPaginButtons,
  StyledItemContainer,
} from './StyledMailbox';

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
  const classes = useStyles();

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

  const handlePagin = (dir) => {
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
      <StyledNav>
        <Button
          startIcon={<StyledMailIcon />}
          className={classes.button}
          onClick={() => handleClickLabel('INBOX')}
          disabled={activeLabel === 'INBOX'}
        >
          Inbox
        </Button>
        <Button
          startIcon={<StyledSentIcon />}
          className={classes.button}
          onClick={() => handleClickLabel('SENT')}
          disabled={activeLabel === 'SENT'}
        >
          Sent
        </Button>
        <Button
          startIcon={<StyledDraftIcon />}
          className={classes.button}
          onClick={() => handleClickLabel('DRAFT')}
          disabled={activeLabel === 'DRAFT'}
        >
          Draft
        </Button>
        <Button
          startIcon={<StyledTrashIcon />}
          className={classes.button}
          onClick={() => handleClickLabel('TRASH')}
          disabled={activeLabel === 'TRASH'}
        >
          Trash
        </Button>
      </StyledNav>

      <StyledItemContainer>
        <StyledMailContainer>
          <StyledPaginButtons>
            <IconButton onClick={() => handlePagin('left')}>
              <ArrowLeft style={{ fontSize: 40 }} />
            </IconButton>
            <IconButton onClick={() => handlePagin('right')}>
              <ArrowRight style={{ fontSize: 40 }} />
            </IconButton>
          </StyledPaginButtons>

          {threadsToRender &&
            threadsToRender.map(
              ({ id, subject, date, from, isChecked }, index) =>
                index >= pagination - threadsByPage && index < pagination ? (
                  <StyledListItem key={id}>
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

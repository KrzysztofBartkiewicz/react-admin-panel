import React from 'react';
import { Button } from '@material-ui/core';
import {
  useStyles,
  StyledNav,
  StyledMailIcon,
  StyledSentIcon,
  StyledDraftIcon,
  StyledTrashIcon,
} from './StyledMailboxNav';

const MailboxNav = ({ onClick, activeLabel }) => {
  const classes = useStyles();

  return (
    <StyledNav>
      <Button
        startIcon={<StyledMailIcon />}
        className={classes.button}
        onClick={() => onClick('INBOX')}
        disabled={activeLabel === 'INBOX'}
      >
        Inbox
      </Button>
      <Button
        startIcon={<StyledSentIcon />}
        className={classes.button}
        onClick={() => onClick('SENT')}
        disabled={activeLabel === 'SENT'}
      >
        Sent
      </Button>
      <Button
        startIcon={<StyledDraftIcon />}
        className={classes.button}
        onClick={() => onClick('DRAFT')}
        disabled={activeLabel === 'DRAFT'}
      >
        Draft
      </Button>
      <Button
        startIcon={<StyledTrashIcon />}
        className={classes.button}
        onClick={() => onClick('TRASH')}
        disabled={activeLabel === 'TRASH'}
      >
        Trash
      </Button>
    </StyledNav>
  );
};

export default MailboxNav;

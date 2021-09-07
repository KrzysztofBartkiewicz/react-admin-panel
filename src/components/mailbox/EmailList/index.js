import React from 'react';
import EmailListItem from '../EmailListItem';
import { StyledList } from './StyledEmailList';

const EmailList = ({ items, pagination, itemsByPage }) => {
  return (
    <StyledList>
      {items.map(({ messagesArr, id, subject, date, from, isChecked }, index) =>
        index >= pagination - itemsByPage && index < pagination ? (
          <EmailListItem
            unread={messagesArr[0].labelIds.includes('UNREAD')}
            id={id}
            subject={subject}
            date={date}
            from={from}
            checked={isChecked}
            key={id}
          />
        ) : null
      )}
    </StyledList>
  );
};

export default EmailList;

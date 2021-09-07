import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { useDispatch } from 'react-redux';
import { setIsThreadChecked } from '../../../redux/gmailReducer/actions';
import { StyledListItem, StyledFrom, StyledDate } from './StyledEmailListItem';

const makeShorter = (str, length) => {
  if (str.length > length) {
    return str.slice(0, length).concat('...');
  } else {
    return str;
  }
};

const EmailListItem = ({ unread, checked, subject, id, date, from }) => {
  const dispatch = useDispatch();

  return (
    <StyledListItem unread={unread}>
      <Checkbox
        color="primary"
        checked={checked}
        onChange={() => dispatch(setIsThreadChecked(id))}
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
  );
};

export default EmailListItem;

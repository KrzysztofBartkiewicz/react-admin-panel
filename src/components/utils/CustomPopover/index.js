import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAnchor } from '../../../redux/selectors';
import { setAnchor } from '../../../redux/actions';
import { StyledBackdrop, StyledPopover } from './StyledPopover';

const CustomPopover = ({ children }) => {
  const anchor = useSelector(getAnchor);
  const dispatch = useDispatch();

  const open = Boolean(anchor);

  return (
    <StyledBackdrop onClick={dispatch(setAnchor(null))} isOpen={open}>
      <StyledPopover anchor={anchor}>{children}</StyledPopover>
    </StyledBackdrop>
  );
};

export default CustomPopover;

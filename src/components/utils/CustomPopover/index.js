import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAnchor } from '../../../redux/appReducer/selectors';
import {
  setAnchor,
  setImageAddress,
  setIsOrderEdited,
} from '../../../redux/appReducer/actions';
import { StyledBackdrop, StyledPopover } from './StyledPopover';

const CustomPopover = ({ children }) => {
  const anchor = useSelector(getAnchor);
  const dispatch = useDispatch();

  const open = Boolean(anchor);

  const handleBackdropClick = () => {
    dispatch(setAnchor(null));
    dispatch(setImageAddress(''));
    dispatch(setIsOrderEdited(false));
  };

  return (
    <StyledBackdrop onClick={handleBackdropClick} isOpen={open}>
      <StyledPopover
        onClick={(event) => event.stopPropagation()}
        anchor={anchor}
      >
        {children}
      </StyledPopover>
    </StyledBackdrop>
  );
};

export default CustomPopover;

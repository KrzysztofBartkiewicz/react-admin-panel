import styled from 'styled-components';
import bg from '../../assets/images/not-found.svg';

export const StyledNotFound = styled.section`
  width: 100vw;
  height: 100vh;
  background: url(${bg}) center / 80rem no-repeat;
  position: relative;
`;

export const StyledBtnWrapper = styled.div`
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translateX(-50%);
`;

import styled from 'styled-components';
import Logo from '../../components/shared/Logo';

export const StyledLogin = styled.section`
  display: flex;
  width: 100vw;
`;

export const StyledLoginPanel = styled.div`
  width: 35%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: relative;
`;

export const StyledLogo = styled(Logo)`
  position: absolute;
  left: 3rem;
  top: 3rem;
`;

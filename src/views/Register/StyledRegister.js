import styled from 'styled-components';
import Logo from '../../components/Logo';

export const StyledRegister = styled.section`
  display: flex;
  width: 100vw;
`;

export const StyledRegisterPanel = styled.div`
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

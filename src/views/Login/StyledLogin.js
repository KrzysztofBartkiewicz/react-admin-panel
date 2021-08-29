import styled from 'styled-components';
import bg from '../../assets/images/Hexagon.svg';
import Logo from '../../components/Logo';

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

export const StyledBg = styled.div`
  width: 65%;
  height: 100vh;
  background: url(${bg}) top center / cover no-repeat fixed;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const StyledBgInner = styled.div`
  margin-left: 5rem;
`;

export const StyledHeading = styled.h1`
  font-size: 7rem;
  margin-right: 3rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.white};
`;

export const StyledLogoWrapper = styled.div`
  display: flex;
`;

import styled from 'styled-components';
import bg from '../../../assets/images/Hexagon.svg';

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

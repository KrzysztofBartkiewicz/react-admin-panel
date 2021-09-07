import styled, { css } from 'styled-components';
import { lighten } from 'polished';
import ItemContainer from '../../shared/ItemContainer';

export const StyledWrapper = styled(ItemContainer)`
  position: relative;
  align-items: flex-start;
  justify-content: space-between;
`;

export const StyledInner = styled.div`
  padding: 1rem;
  display: flex;
  align-items: flex-end;
`;

export const StyledBar = styled.div`
  width: 4px;
  margin: 1px;
  ${({ color, height }) => css`
    background-color: ${color};
    height: ${height}px;
  `}
`;

export const StyledPercent = styled.div`
  position: absolute;
  right: 2rem;
  bottom: 2rem;
  padding: 0.3rem 0.8rem;
  border-radius: 0.8rem;
  background-color: ${({ color }) => lighten(0.35, color)};

  span {
    ${({ theme, color }) => css`
      font-size: ${theme.fontSizes.xl};
      font-weight: ${theme.fontWeights.semiBold};
      color: ${color};
    `}
  }
`;

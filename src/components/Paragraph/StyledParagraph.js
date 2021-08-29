import styled from 'styled-components';

export const StyledParagraph = styled.p`
  font-size: ${({ size, theme }) =>
    size ? `${theme.fontSizes[size]}` : `${theme.fontSizes.xs}`};

  font-weight: ${({ weight, theme }) =>
    weight ? `${theme.fontWeights[weight]}` : 'normal'};

  color: ${({ color, theme }) =>
    color ? theme.colors[color] : theme.colors.black};
`;

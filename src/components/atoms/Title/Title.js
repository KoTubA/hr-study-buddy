import styled from 'styled-components';

export const Title = styled.h1`
  font-size: ${({ isBig, theme: { fontSize } }) => (isBig ? fontSize.xxxl : fontSize.xxl)};
  color: ${({ theme }) => theme.colors.darkGrey};
  font-family: 'Roboto', sans-serif;
`;

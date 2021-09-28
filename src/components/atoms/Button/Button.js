import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  margin: 15px 0;
  padding: ${({ isBig }) => (isBig ? '10px 45px' : '6px 25px')};
  font-size: ${({ isBig, theme: { fontSize } }) => (isBig ? fontSize.s : fontSize.xs)};
  background-color: ${({ theme }) => theme.colors.lightPurple};
  border-radius: 95px;
  border: none;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.darkGrey};
`;

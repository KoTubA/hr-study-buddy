import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  grid-column: 2/2;
  margin-bottom: 20px;
  overflow: auto;
  grid-row: 2/ -1;
`;

import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-rows: 80px 1fr;
  grid-template-columns: 120px 1fr 0.75fr;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  overflow-y: hidden;
`;

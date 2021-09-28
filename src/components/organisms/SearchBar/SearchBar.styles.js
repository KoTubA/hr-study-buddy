import styled from 'styled-components';
import { Input } from 'components/atoms/Input/Input';

export const SearchBarWrapper = styled.div`
  grid-row: 1 / 2;
  grid-column: 2 / 3;
  border-bottom: 1px solid ${({ theme }) => theme.colors.darkPurple};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 40px;

  ${Input} {
    width: 100%;
    max-width: 470px;
    padding: 15px 25px;
    border: 2px solid ${({ theme }) => theme.colors.lightPurple};
  }
`;

export const StatusInfo = styled.div`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.l};
  margin-right: 40px;
  p {
    margin: 5px;
    width: max-content;
  }
`;

export const SearchWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const SearchResults = styled.ul`
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
  z-index: 1000;
  max-width: 470px;
  max-height: 500px;
  overflow-y: auto;
  padding: 10px;
  border-radius: 15px;
  list-style: none;
  width: 100%;
  position: absolute;
  left: 0;
  top: 35px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
`;

export const SearchResultsItem = styled.li`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.darkGrey};
  background-color: ${({ theme, isHighlighted }) => (isHighlighted ? theme.colors.lightPurple : theme.colors.white)};
  width: 100%;
  padding: 20px 5px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.lightPurple};
  }
  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.darkPurple};
  }
`;

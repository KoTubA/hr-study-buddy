import styled from 'styled-components';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';

export const Wrapper = styled.div`
  grid-row: 1 / 3;
  grid-column: 3 / 3;
  border-left: 1px solid ${({ theme }) => theme.colors.darkPurple};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 20px 50px;
  overflow-y: scroll;
`;

export const NewsSectionHeader = styled.h2`
  margin-right: auto;
  width: 100%;
  color: ${({ theme }) => theme.colors.darkGrey};
  font-family: 'Roboto', sans-serif;
`;

export const ArticleWrapper = styled(ViewWrapper)`
  margin: 0px 0px 30px 0px;
  width: 100%;
  max-width: unset;
  border-radius: 12px;
  color: ${({ theme }) => theme.colors.darkGrey};
  p {
    line-height: 1.6;
  }
`;

export const TitleWrapper = styled.div`
  h3 {
    margin: 0;
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }
  p {
    margin: 0;
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  img {
    margin-left: 35px;
    max-width: 200px;
    object-fit: cover;
  }
`;

export const LoaderWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

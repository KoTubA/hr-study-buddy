import styled from 'styled-components';
import { Title } from 'components/atoms/Title/Title';

export const LogoWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.darkGrey};
  width: 100%;
  min-width: 100px;
  height: 60px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 30px;
`;

export const LogoTitle = styled(Title)`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.white};
  text-align: right;
  margin-right: 20px;
  font-family: 'Montserrat', sans-serif;
  max-width: min-content;
`;

import styled from 'styled-components';
import { LoaderWrapper } from 'views/Dashboard.styles';

export const Wrapper = styled.div`
  width: 400px;
  height: auto;
  min-height: 124px;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(400px)')};
  transition: transform 0.6s ease-in-out;
  position: absolute;
  right: 0;
  top: 40px;
  background: white;
  border: 2px solid ${({ theme }) => theme.colors.darkGrey};
`;

export const WidgetHandler = styled.button`
  width: 80px;
  height: 30px;
  background-color: ${({ theme }) => theme.colors.darkGrey};
  transform: rotate(-90deg);
  position: absolute;
  left: -57px;
  border-radius: 8px 8px 0 0;
  top: 40px;
  color: white;
  border: none;
  cursor: pointer;
`;

export const NotesWrapper = styled.div`
  max-height: 700px;
  overflow-y: auto;
  padding: 20px 60px;
  display: flex;
  flex-direction: column;

  h5 {
    margin: 0px;
  }
`;

export const InfoWrapper = styled(LoaderWrapper)`
  min-height: 120px;
`;

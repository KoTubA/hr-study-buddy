import styled from 'styled-components';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';

export const NoteWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;

  h3 {
    margin-top: 0;
    margin-bottom: 10px;
  }

  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.darkGrey};
    font-size: ${({ theme }) => theme.fontSize.s};
    line-height: 1.7;
  }
`;

export const StyledDeleteButton = styled(DeleteButton)`
  position: absolute;
  top: 5px;
  left: -40px;
`;

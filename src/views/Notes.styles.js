import styled from 'styled-components';
import FormField from 'components/molecules/FormField/FormField';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px 50px;
  display: flex;
  flex-direction: column;
`;

export const NotesSection = styled.div`
  width: 100%;
  display: grid;
  padding-bottom: 50px;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  align-items: flex-start;
`;

export const FormWrapper = styled.form`
  padding: 40px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 25px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledFormField = styled(FormField)`
  height: ${({ isTextarea }) => (isTextarea ? '400px' : 'unset')};
`;

export const NotesWrapper = styled.div`
  padding: 0px 60px 20px 60px;
  display: flex;
  flex-direction: column;

  h5 {
    margin: 0px;
  }
`;

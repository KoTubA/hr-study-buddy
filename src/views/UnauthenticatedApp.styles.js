import styled from 'styled-components';
import { Title } from 'components/atoms/Title/Title';
import { Button } from 'components/atoms/Button/Button';
import Logo from 'components/molecules/Logo/Logo';

export const FormWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Form = styled.form`
  width: 425px;
  position: relative;
  padding: 30px 90px 50px 90px;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  border-radius: 10px;

  span {
    padding-bottom: 5px;
    width: 100%;
    font-size: ${({ theme }) => theme.fontSize.s};
    color: ${({ theme }) => theme.colors.errorMsg};
  }
`;

export const FormTitle = styled(Title)`
  margin-top: 0px;
  font-size: ${({ theme }) => theme.fontSize.xl};
`;

export const ButtonForm = styled(Button)`
  margin-top: 50px;
`;

export const LogoWrapper = styled.div`
  position: absolute;
  right: 0px;
  transform: translateX(100%);
  top: 35px;
`;

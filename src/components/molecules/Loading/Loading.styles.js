import styled, { keyframes } from 'styled-components';
import { Title } from 'components/atoms/Title/Title';

const iSpinnerBlade = keyframes`
  0% {
    opacity: 0.2;
  }

  40% {
    opacity: 1;
  }
`;

export const LoaderTitle = styled(Title)`
  margin-top: 0px;
`;

export const Wrapper = styled.div`
  width: 100%;
  padding: 40px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const SpinLoader = styled.div`
  position: relative;
  width: 59px;
  height: 59px;
  margin: 15px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SpinBlade = styled.div`
  content: '';
  display: block;
  position: absolute;
  width: 4px;
  height: 21px;
  border-radius: 50px;
  opacity: 1;
  background-color: ${({ theme }) => theme.colors.darkGrey};
  animation: 0.8s ${iSpinnerBlade} ease-in-out infinite;

  &&:nth-child(1) {
    transform: rotate(0deg) translateY(-20px);
    animation-delay: 0.1s;
  }

  &&:nth-child(2) {
    transform: rotate(45deg) translateY(-20px);
    animation-delay: 0.2s;
  }

  &&:nth-child(3) {
    transform: rotate(90deg) translateY(-20px);
    animation-delay: 0.3s;
  }

  &&:nth-child(4) {
    transform: rotate(135deg) translateY(-20px);
    animation-delay: 0.4s;
  }

  &&:nth-child(5) {
    transform: rotate(180deg) translateY(-20px);
    animation-delay: 0.5s;
  }

  &&:nth-child(6) {
    transform: rotate(225deg) translateY(-20px);
    animation-delay: 0.6s;
  }

  &&:nth-child(7) {
    transform: rotate(270deg) translateY(-20px);
    animation-delay: 0.7s;
  }

  &&:nth-child(8) {
    transform: rotate(315deg) translateY(-20px);
    animation-delay: 0.8s;
  }
`;

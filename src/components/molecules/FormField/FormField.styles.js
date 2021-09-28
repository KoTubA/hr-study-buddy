import styled from 'styled-components';
import { Label } from 'components/atoms/Label/Label';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 5px;

  ${Label} {
    margin: 10px 0;
  }
`;

import React from 'react';
import { Wrapper } from './Loading.styles';
import SpinLoader from 'components/atoms/SpinLoader/SpinLoader';

const StudentDetails = ({ children }) => {
  return (
    <Wrapper>
      {children}
      <SpinLoader />
    </Wrapper>
  );
};

export default StudentDetails;

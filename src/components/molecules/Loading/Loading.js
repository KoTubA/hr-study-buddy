import React from 'react';
import { SpinBlade, SpinLoader, LoaderTitle, Wrapper } from './Loading.styles';

const StudentDetails = () => {
  return (
    <Wrapper>
      <LoaderTitle as="h3">Loading...</LoaderTitle>
      <SpinLoader>
        <SpinBlade />
        <SpinBlade />
        <SpinBlade />
        <SpinBlade />
        <SpinBlade />
        <SpinBlade />
        <SpinBlade />
        <SpinBlade />
      </SpinLoader>
    </Wrapper>
  );
};

export default StudentDetails;

import React from 'react';
import { SpinBlade, Wrapper } from './SpinLoader.styles';

const SpinLoader = () => {
  return (
    <Wrapper>
      <SpinBlade />
      <SpinBlade />
      <SpinBlade />
      <SpinBlade />
      <SpinBlade />
      <SpinBlade />
      <SpinBlade />
      <SpinBlade />
    </Wrapper>
  );
};

export default SpinLoader;

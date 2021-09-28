import React from 'react';
import { StyledLink, Wrapper } from 'components/organisms/Navigation/Navigation.styles';
import Logo from 'components/molecules/Logo/Logo';
import { useAuth } from 'hooks/useAuth';

const Navigation = () => {
  const auth = useAuth();

  return (
    <Wrapper>
      <Logo />
      <StyledLink to="/group">Dashboard</StyledLink>
      <StyledLink to="/notes">Notes</StyledLink>
      <StyledLink as="a" onClick={auth.signOut}>
        Logout
      </StyledLink>
    </Wrapper>
  );
};

export default Navigation;

import React from 'react';
import { useAuth } from 'hooks/useAuth';
import ErrorMessage from 'components/molecules/ErrorMessage/ErrorMessage';
import { useError } from 'hooks/useError';
import AuthenticatedApp from 'views/AuthenticatedApp';
import UnauthenticatedApp from 'views/UnauthenticatedApp';

const Root = () => {
  const auth = useAuth();
  const { error, errormsg } = useError();

  return (
    <>
      {error ? <ErrorMessage message={errormsg} /> : null}
      {auth.isLoading ? null : auth.user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </>
  );
};

export default Root;

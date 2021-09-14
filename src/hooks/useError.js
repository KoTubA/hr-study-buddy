import React, { useCallback, useContext, useState } from 'react';

const ErrorContext = React.createContext({});

export const ErrorProvider = ({ children }) => {
  const [error, setError] = useState(false);
  const [errormsg, setErrormsg] = useState('');

  const dispatchError = useCallback((message) => {
    setErrormsg(message);
    setError(true);
    setTimeout(() => {
      setError(false);
      setErrormsg('');
    }, 7000);
  }, []);

  return <ErrorContext.Provider value={{ error, errormsg, dispatchError }}>{children}</ErrorContext.Provider>;
};

export const useError = () => {
  const errorContext = useContext(ErrorContext);

  if (!errorContext) {
    throw Error('useAuth needs to be used inside AuthContext');
  }

  return errorContext;
};

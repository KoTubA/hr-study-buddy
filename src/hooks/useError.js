import React, { useCallback, useContext, useState } from 'react';

const ErrorContext = React.createContext({});

export const ErrorProvider = ({ children }) => {
  const [error, setError] = useState(false);
  const [errormsg, setErrormsg] = useState('');

  let timer;
  const setTimer = () => {
    timer = setTimeout(() => {
      console.log('KONIEC');
      setError(false);
      setErrormsg('');
    }, 7000);
  };

  const dispatchError = useCallback(async (message) => {
    clearTimeout(timer);
    await setError(false);
    await setErrormsg(message);
    await setError(true);
    setTimer();
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

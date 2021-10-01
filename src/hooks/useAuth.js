import React, { useContext, useEffect, useState } from 'react';
import { useError } from 'hooks/useError';

const AuthContext = React.createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setisLoading] = useState(true);
  const { dispatchError } = useError();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      (async () => {
        try {
          const response = await fetch('/me', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          if (response.ok) {
            const data = await response.json();
            await setUser(data);
          }
        } catch (e) {
          console.log(e);
        }
        await setisLoading(false);
      })();
    } else {
      setisLoading(false);
    }
  }, []);

  const signIn = async ({ login, password }) => {
    try {
      const response = await fetch('/login', {
        method: 'POST',
        body: JSON.stringify({ login, password }),
      });
      if (response.ok) {
        const data = await response.json();
        setUser(data);
        localStorage.setItem('token', data.token);
      } else {
        throw new Error(response);
      }
    } catch (e) {
      dispatchError('Invalid email or password');
    }
  };

  const signOut = () => {
    setUser(null);
    localStorage.removeItem('token');
  };

  return <AuthContext.Provider value={{ user, isLoading, signIn, signOut }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const auth = useContext(AuthContext);

  if (!auth) {
    throw Error('useAuth needs to be used inside AuthContext');
  }

  return auth;
};

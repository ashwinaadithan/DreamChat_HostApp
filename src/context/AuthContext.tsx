import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {createContext, useContext, useEffect, useState} from 'react';
import {Alert} from 'react-native';

interface User {
  id: string;
  email: string;
  name: string;
}

interface IAuthContext {
  user: User | null;
  isSignedIn: boolean;
  isLoading: boolean;
  login: (id: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const initialAuth = {
  user: null,
  isSignedIn: false,
  isLoading: false,
  login: async () => {},
  logout: async () => {},
};
const AuthContext = createContext<IAuthContext>({
  ...initialAuth,
});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({children}: {children: JSX.Element}) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getToken = async () => {
      const access = await AsyncStorage.getItem('accessToken');
      if (access) {
        setToken(access);
      }
    };

    getToken();
  }, []);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          'https://8k-work.khavinshankar.dev/hosts/me',
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        if (response.ok) {
          const data = await response.json();
          setUser(data);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    if (token) fetchUser();
  }, [token]);

  const login = async (id: string, password: string) => {
    setIsLoading(true);
    const response = await fetch(
      'https://8k-work.khavinshankar.dev/hosts/login',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id,
          password,
        }),
      },
    );

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      AsyncStorage.setItem('accessToken', data.access);
      setToken(data.access);
    } else {
      Alert.alert('Error', 'Failed to login.');
    }
    setIsLoading(false);
  };

  const logout = async () => {
    setIsLoading(true);
    await AsyncStorage.removeItem('accessToken');
    setUser(null);
    setToken(null);
    setIsLoading(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isSignedIn: !!user,
        user,
        login,
        logout,
        isLoading,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

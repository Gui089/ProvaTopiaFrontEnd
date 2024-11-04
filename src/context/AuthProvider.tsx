import { createContext, useState } from 'react';
import Cookies from 'js-cookie';
import { api } from '../api/api';
import { UserInfoType } from '../types/userTypes';

interface AuthContextType {
  authenticated: boolean;
  handleLogin: (email: string, password: string) => Promise<void>;
  token: string;
  userInfo: UserInfoType;
  getUserInfo: (token: string) => Promise<void>;
}

const ContextAuth = createContext<AuthContextType>({
  authenticated: false,
  handleLogin: async () => {},
  token: "",
  userInfo: {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    percentageScore: 0,
    questionsCorrect: 0,
    score: 0,
    totalquestionsResolve: 0
  },
  getUserInfo: async () => {}
});

const AuthProvider = ({ children }: any) => {
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useState<UserInfoType>({
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    percentageScore: 0,
    questionsCorrect: 0,
    score: 0,
    totalquestionsResolve: 0
  });

  const handleLogin = async (email: string, password: string) => {
    try {
      const response = await api.post("/auth", { email, password });
      if (response.status === 200) {
        setAuthenticated(true);
        Cookies.set('token', response.data.token, { expires: 7 });
      } else {
        setAuthenticated(false);
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      setAuthenticated(false);
    }
  };

  const getUserInfo = async (token: string) => {
    try {
      const response = await api.get("/getUsers", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setUserInfo(response.data);
    } catch (error) {
      console.error("Erro ao buscar informações do usuário:", error);
    }
  };

  return (
    <ContextAuth.Provider value={{ authenticated, handleLogin, token: Cookies.get('token') || "", userInfo, getUserInfo }}>
      {children}
    </ContextAuth.Provider>
  );
};

export { ContextAuth, AuthProvider };



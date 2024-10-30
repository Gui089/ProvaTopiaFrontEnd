import { createContext, useState } from 'react';
import { api } from '../api/api';

interface AuthContextType {
  authenticated: boolean;
  handleLogin: (email: string, password: string) => Promise<void>;
  token:string;
}

const ContextAuth = createContext<AuthContextType>({
  authenticated: false,
  handleLogin: async () => {},
  token:""
});

const AuthProvider = ({ children }: any) => {
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const [token, setToken] = useState<string>("");

  const handleLogin = async (email: string, password: string) => {
    try {
      const response = await api.post("/auth", { email, password });
      if (response.status === 200) {
        setAuthenticated(true);
        setToken(response.data.token);
      } else {
        setAuthenticated(false);
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      setAuthenticated(false);
    }
  };

  return (
    <ContextAuth.Provider value={{ authenticated, handleLogin,token }}>
      {children}
    </ContextAuth.Provider>
  );
};

export { ContextAuth, AuthProvider };
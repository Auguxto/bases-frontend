import { createContext, useState } from "react";
import api from "../api";

type UserContextProps = {
  user: User;
  handleLogin: (username: string, password: string) => void;
  handleLogout: () => void;
};

export type User = {
  id: string;
  admin: true;
  name: string;
  username: string;
  updated_at: string;
  created_at: string;
};

export const UserContext = createContext({} as UserContextProps);

type UserProviderProps = {
  children: React.ReactNode;
};

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<User>(null!);

  const handleLogin = async (username: string, password: string) => {
    const response = await api.post("/session", { username, password });

    console.log(response.data);
  };

  const handleLogout = () => {};

  return (
    <UserContext.Provider value={{ user, handleLogin, handleLogout }}>
      {children}
    </UserContext.Provider>
  );
};

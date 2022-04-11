import { createContext, useState } from "react";

type UserContextProps = {
  user: User;
  handleLogin: () => void;
  handleLogout: () => void;
};

export type User = {
  name: string;
  username: string;
};

export const UserContext = createContext({} as UserContextProps);

type UserProviderProps = {
  children: React.ReactNode;
};

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<User>(null!);

  const handleLogin = () => {};

  const handleLogout = () => {};

  return (
    <UserContext.Provider value={{ user, handleLogin, handleLogout }}>
      {children}
    </UserContext.Provider>
  );
};

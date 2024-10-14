import { createContext, useContext, useState, ReactNode } from "react";

interface AuthContextProps {
  isAuthenticated: boolean;
  login: (email: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (email: string, password: string) => {
    if (email === "prologin@prologin.com" && password === "ProLogin123456") {
      setIsAuthenticated(true);
      return true;
    } else {
      alert("Invalid credentials");
      return false;
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

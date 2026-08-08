import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const navigate = useNavigate();

  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem("healthlens-auth");

    return stored ? JSON.parse(stored) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem(
        "healthlens-auth",
        JSON.stringify(user)
      );
    } else {
      localStorage.removeItem("healthlens-auth");
    }
  }, [user]);

  const login = (authData) => {
    setUser(authData);

    navigate("/dashboard");
  };

  const logout = () => {
    setUser(null);

    localStorage.removeItem("healthlens-auth");

    navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token: user?.token || null,
        login,
        logout,
        isAuthenticated: !!user?.token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
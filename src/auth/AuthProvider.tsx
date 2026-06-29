import { type ReactNode, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import type { User } from "./types";
import { authStorage } from "./authStorage";

interface Props {
  children: ReactNode;
}

export default function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const login = async (username: string, _password: string): Promise<void> => {
    // Temporary mock user
    const mockUser: User = {
      id: 1,
      username,
      email: `${username}@company.com`,
      roles: ["QUALITY_INSPECTOR"],
    };

    authStorage.setSession("mock-access-token", "mock-refresh-token", mockUser);

    setUser(mockUser);
  };

  const logout = () => {
    authStorage.clear();
    setUser(null);
  };

  useEffect(() => {
    const token = authStorage.getAccessToken();
    const user = authStorage.getUser();

    if (token && user) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setUser(user);
    }

    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isAuthenticated: !!user,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

import { getCurrentUser } from "@/features/auth/getCurrentUser/api/getCurrentUserApi";
import { useServerFn } from "@tanstack/react-start";
import { createContext, ReactNode, useContext } from "react";

type User = {
  id: number;
  name: string;
  role: string;
};

type AuthContextType = {
  user: User | null;
  isLoading: boolean;
  refetch: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const data = useServerFn(getCurrentUser);

  return (
    <AuthContext.Provider
      value={{ user: null, isLoading: false, refetch: () => {} }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}

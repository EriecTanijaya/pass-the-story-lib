import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { createContext, type ReactNode, useContext } from "react";
import { getCurrentUserApi } from "@/features/auth/getCurrentUser/api/getCurrentUserApi";

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
	const getCurrentUser = useServerFn(getCurrentUserApi);

	const { data, isLoading, refetch } = useQuery({
		queryKey: ["user"],
		queryFn: () => getCurrentUser(),
	});

	console.log({ data, isLoading, refetch });

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

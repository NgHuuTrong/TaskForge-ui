import { useQuery } from "@tanstack/react-query";
import { getAllUsers } from "../services/apiUser";

export function useUsers() {
    const {
        isLoading,
        data: users,
        error,
    } = useQuery({
        queryKey: ['users'],
        queryFn: getAllUsers,
        useErrorBoundary: true,
    });
    return { isLoading, error, users };
}
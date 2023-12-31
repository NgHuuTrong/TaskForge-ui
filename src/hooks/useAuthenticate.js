import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { login as loginApi, logout as logoutApi } from '../services/apiAuth';
import authAxios, { getToken } from "../utils/axios";
import toast from "react-hot-toast";
import { getCurrentUser, updateCurrentUser } from "../services/apiUser";

export function useLogin() {
    const navigate = useNavigate();

    const { mutate: login, isLoading } = useMutation({
        mutationFn: ({ email, password }) => loginApi({ email, password }),
        onSuccess: (data) => {
            authAxios.defaults.headers.Authorization = `Bearer ${getToken()}`;
            navigate('/boards', { replace: true });
        },
        onError: (err) => {
            toast.error('Provided email or password are incorrect');
        },
    });

    return { login, isLoading };
}

export function useLogout() {
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const { mutate: logout, isLoading } = useMutation({
        mutationFn: logoutApi,
        onSuccess: () => {
            queryClient.removeQueries();
            navigate("/login", { replace: true });
        },
    });

    return { logout, isLoading };
}

// export function useUser() {
//     const { isLoading, data: user } = useQuery({
//         queryKey: ['token'],
//         queryFn: getCurrentUser,
//     });
//     return { isLoading, user, isAuthenticated: user?.role };
// }

export function useUpdateUser() {
    const queryClient = useQueryClient();

    const { mutate: updateUser, isLoading } = useMutation({
        mutationFn: ({ username, bio, file }) => updateCurrentUser({ username, bio, file }),
        onSuccess: (data) => {
            toast.success('User account successfully updated');
            queryClient.setQueryData(['user'], data.user);
        },
        onError: (err) => toast.error(err.message),
    });

    return { updateUser, isLoading };
}

export function useUser() {
    let isAuthenticated = false
    const { isLoading, data } = useQuery({
        queryKey: ['user'],
        queryFn: getCurrentUser,
    });

    if (data) {
        isAuthenticated = true
    }

    return { isLoading, user: data, isAuthenticated };
}

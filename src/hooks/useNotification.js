import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getMyNotifications, readNotification } from "../services/apiNotification";
import toast from "react-hot-toast";

export function useNotifications() {
    const {
        isLoading,
        data: notifications,
        error,
    } = useQuery({
        queryKey: ['notifications'],
        queryFn: getMyNotifications,
        useErrorBoundary: true,
    });
    return { isLoading, error, notifications };
}

export function useReadNotification() {
    const queryClient = useQueryClient();

    const {
        mutate,
        isLoading: isUpdating,
        error,
    } = useMutation({
        mutationFn: readNotification,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['notifications'], exact: true });
        },
        onError: (err) => toast.error(err.message),
    });

    return { isUpdating, mutate, error };
}
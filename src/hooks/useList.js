import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { copyList, createNewList, deleteList, moveList, getList, moveAllCardsInList, patchList, removeAllCards } from '../services/apiList';
import { useParams } from 'react-router-dom';

export function useList(listId) {
    const {
        isLoading,
        data: list,
        error,
    } = useQuery({
        queryKey: ['list', listId],
        queryFn: () => getList(listId),
        retry: false,
        useErrorBoundary: true,
    });
    return { isLoading, error, list };
}

export function useCreateList() {
    const {
        mutate: createList,
        isLoading: isCreating,
        error,
    } = useMutation({
        mutationFn: createNewList,
        onError: (err) => toast.error(err.message),
    });

    return { isCreating, createList, error };
}

export function useDeleteList() {
    const queryClient = useQueryClient();
    const { boardId } = useParams();

    const {
        mutate: removeList,
        isLoading: isDeletingList,
        error,
    } = useMutation({
        mutationFn: deleteList,
        onSuccess: () => {
            toast.success('List successfully removed');
            queryClient.invalidateQueries({ queryKey: ['board', boardId], exact: true });
        },
        onError: (err) => toast.error(err.message),
    });

    return { isDeletingList, removeList, error };
}

export function useRemoveAllCards() {
    const queryClient = useQueryClient();
    const { boardId } = useParams();

    const {
        mutate,
        isLoading: isDeletingCards,
        error,
    } = useMutation({
        mutationFn: removeAllCards,
        onSuccess: () => {
            toast.success('All cards of the list successfully removed');
            queryClient.invalidateQueries({ queryKey: ['board', boardId], exact: true });
        },
        onError: (err) => toast.error(err.message),
    });

    return { isDeletingCards, mutate, error };
}

export function useCopyList() {
    const queryClient = useQueryClient();
    const { boardId } = useParams();

    const {
        mutate: copy,
        isLoading: isCopying,
        error,
    } = useMutation({
        mutationFn: copyList,
        onSuccess: () => {
            toast.success('New list successfully copied');
            queryClient.invalidateQueries({ queryKey: ['board', boardId], exact: true });
        },
        onError: (err) => toast.error(err.message),
    });

    return { isCopying, copy, error };
}

export function useUpdateList() {
    const queryClient = useQueryClient();
    const { boardId } = useParams();
    
    const {
        mutate: updateList,
        isLoading: isUpdating,
        error,
    } = useMutation({
        mutationFn: patchList,
        onSuccess: () => {
            toast.success('Update list successfully !');
            queryClient.invalidateQueries({ queryKey: ['board', boardId], exact: true });
        },
        onError: (err) => toast.error(err.message),
    });

    return { isUpdating, updateList, error };
}

export function useMoveList() {
    const queryClient = useQueryClient();
    const { boardId } = useParams();

    const {
        mutate,
        isLoading: isMoving,
        error,
    } = useMutation({
        mutationFn: moveList,
        onError: (err) => toast.error(err.message),
        onSuccess: () => {
            toast.success('Move list successfully !');
            queryClient.invalidateQueries({ queryKey: ['board', boardId], exact: true });
        }
    });

    return { isMoving, mutate, error };
}

export function useMoveAllCardsInList() {
    const queryClient = useQueryClient();
    const { boardId } = useParams();

    const {
        mutate: moveAllCards,
        isLoading: isMoving,
        error,
    } = useMutation({
        mutationFn: moveAllCardsInList,
        onError: (err) => toast.error(err.message),
        onSuccess: () => {
            toast.success('Move all cards successfully !');
            queryClient.invalidateQueries({ queryKey: ['board', boardId], exact: true });
        }
    });

    return { moveAllCards, isMoving, error };
}


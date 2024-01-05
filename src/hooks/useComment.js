import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { createComment, deleteComment, getComments, patchComment } from '../services/apiComment';

export function useComments() {
    const { cardId } = useParams();

    const {
        isLoading,
        data: comments,
        error,
    } = useQuery({
        queryKey: ['comments', cardId],
        queryFn: () => getComments(cardId),
        retry: false,
        useErrorBoundary: true,
    });
    return { isLoading, error, comments };
}

export function useCreateComment() {
    const queryClient = useQueryClient();
    const { cardId, boardId } = useParams();

    const {
        mutate: comment,
        isLoading: isCreating,
        error,
    } = useMutation({
        mutationFn: createComment,
        onSuccess: () => {
            toast.success('Comment on card successfully !');
            queryClient.invalidateQueries({ queryKey: ['comments', cardId], exact: true });
            queryClient.invalidateQueries({ queryKey: ['board', boardId], exact: true });
        },
        onError: (err) => toast.error(err.message),
    });

    return { isCreating, comment, error };
}

export function useDeleteComment() {
    const queryClient = useQueryClient();
    const { cardId, boardId } = useParams();

    const {
        mutate: removeComment,
        isLoading: isDeleting,
        error,
    } = useMutation({
        mutationFn: deleteComment,
        onSuccess: () => {
            toast.success('Delete comment successfully !');
            queryClient.invalidateQueries({ queryKey: ['comments', cardId], exact: true });
            queryClient.invalidateQueries({ queryKey: ['board', boardId], exact: true });
        },
        onError: (err) => toast.error(err.message),
    });

    return { isDeleting, removeComment, error };
}

export function useUpdateComment() {const {
        mutate: updateComment,
        isLoading: isUpdating,
        error,
    } = useMutation({
        mutationFn: patchComment,
        onError: (err) => toast.error(err.message),
    });

    return { isUpdating, updateComment, error };
}
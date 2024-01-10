import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { assignMemberToCard, copyCard, createNewCard, deleteCard, deleteCardAttachment, getCard, joinCard, moveCardInList, moveCardToAnotherList, patchCard, patchCardAttachment, uploadFileCard, uploadLinkCard } from '../services/apiCard';

export function useCard() {
    const { cardId } = useParams();

    const {
        isLoading,
        data: card,
        error,
    } = useQuery({
        queryKey: ['card', cardId],
        queryFn: () => getCard(cardId),
        retry: false,
        useErrorBoundary: true,
    });
    return { isLoading, error, card };
}

export function useCreateCard() {
    const {
        mutate: createCard,
        isLoading: isCreating,
        error,
    } = useMutation({
        mutationFn: createNewCard,
        onError: (err) => toast.error(err.message),
    });

    return { isCreating, createCard, error };
}

export function useDeleteCard() {
    const queryClient = useQueryClient();
    const { boardId } = useParams();

    const {
        mutate: removeCard,
        isLoading: isDeleting,
        error,
    } = useMutation({
        mutationFn: deleteCard,
        onSuccess: () => {
            toast.success('Card successfully removed');
            queryClient.invalidateQueries({ queryKey: ['board', boardId], exact: true });
        },
        onError: (err) => toast.error(err.message),
    });

    return { isDeleting, removeCard, error };
}

export function useUpdateCard() {
    const { cardId } = useParams();
    const queryClient = useQueryClient();

    const {
        mutate: updateCard,
        isLoading: isUpdating,
        error,
    } = useMutation({
        mutationFn: patchCard,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['card', cardId], exact: true });
        },
        onError: (err) => toast.error(err.message),
    });

    return { isUpdating, updateCard, error };
}

export function useMoveCardInList(boardId) {
    const queryClient = useQueryClient();

    const {
        mutate,
        isLoading: isMoving,
        error,
    } = useMutation({
        mutationFn: moveCardInList,
        onError: (err) => toast.error(err.message),
        onSuccess: () => {
            toast.success('Move card successfully !');
            queryClient.invalidateQueries({ queryKey: ['board', boardId.toString()], exact: true });
        }
    });

    return { isMoving, mutate, error };
}

export function useMoveCardToAnotherList() {
    const queryClient = useQueryClient();
    const { boardId, cardId } = useParams();

    const {
        mutate,
        isLoading: isMoving,
        error,
    } = useMutation({
        mutationFn: moveCardToAnotherList,
        onError: (err) => toast.error(err.message),
        onSuccess: () => {
            toast.success('Move card successfully !');
            queryClient.invalidateQueries({ queryKey: ['board', boardId], exact: true });
            if (cardId) {
                queryClient.invalidateQueries({ queryKey: ['card', cardId], exact: true });
            }
        }
    });

    return { isMoving, mutate, error };
}

export function useJoinCard() {
    const { cardId } = useParams();
    const queryClient = useQueryClient();

    const {
        mutate,
        isLoading: isJoining,
        error,
    } = useMutation({
        mutationFn: joinCard,
        onError: (err) => toast.error(err.message),
        onSuccess: () => {
            toast.success('Join card successfully !');
            queryClient.invalidateQueries({ queryKey: ['card', cardId], exact: true });
        }
    });

    return { isJoining, mutate, error };
}

export function useAssignMemberToCard() {
    const { cardId, boardId } = useParams();
    const queryClient = useQueryClient();

    const {
        mutate: assignMember,
        isLoading: isAssigning,
        error,
    } = useMutation({
        mutationFn: assignMemberToCard,
        onError: (err) => toast.error(err.message),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['card', cardId], exact: true });
            queryClient.invalidateQueries({ queryKey: ['board', boardId], exact: true });
        }
    });

    return { isAssigning, assignMember, error };
}

export function useUploadFile() {
    const { cardId, boardId } = useParams();
    const queryClient = useQueryClient();

    const {
        mutate: uploadFile,
        isLoading: isUploading,
        error,
    } = useMutation({
        mutationFn: uploadFileCard,
        onError: (err) => toast.error(err.message),
        onSuccess: () => {
            toast.success('Upload attachment successfully !');
            queryClient.invalidateQueries({ queryKey: ['card', cardId], exact: true });
            queryClient.invalidateQueries({ queryKey: ['board', boardId], exact: true });
        }
    });

    return { isUploading, uploadFile, error };
}

export function useUploadLink() {
    const { cardId, boardId } = useParams();
    const queryClient = useQueryClient();

    const {
        mutate: uploadLink,
        isLoading: isUploading,
        error,
    } = useMutation({
        mutationFn: uploadLinkCard,
        onError: (err) => toast.error(err.message),
        onSuccess: () => {
            toast.success('Upload attachment successfully !');
            queryClient.invalidateQueries({ queryKey: ['card', cardId], exact: true });
            queryClient.invalidateQueries({ queryKey: ['board', boardId], exact: true });
        }
    });

    return { isUploading, uploadLink, error };
}

export function useDeleteCardAttachment() {
    const queryClient = useQueryClient();
    const { cardId, boardId } = useParams();

    const {
        mutate: removeCardAttachment,
        isLoading: isDeleting,
        error,
    } = useMutation({
        mutationFn: deleteCardAttachment,
        onSuccess: () => {
            toast.success('Card Attachment successfully removed');
            queryClient.invalidateQueries({ queryKey: ['card', cardId], exact: true });
            queryClient.invalidateQueries({ queryKey: ['board', boardId], exact: true });
        },
        onError: (err) => toast.error(err.message),
    });

    return { isDeleting, removeCardAttachment, error };
}

export function useCopyCard() {
    const {
        mutate,
        isLoading: isCopying,
        error,
    } = useMutation({
        mutationFn: copyCard,
        onError: (err) => toast.error(err.message),
    });

    return { isCopying, mutate, error };
}

export function useUpdateCardAttachment() {
    const { cardId } = useParams();
    const queryClient = useQueryClient();

    const {
        mutate: updateAttachment,
        isLoading: isUpdating,
        error,
    } = useMutation({
        mutationFn: patchCardAttachment,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['card', cardId], exact: true });
        },
        onError: (err) => toast.error(err.message),
    });

    return { isUpdating, updateAttachment, error };
}
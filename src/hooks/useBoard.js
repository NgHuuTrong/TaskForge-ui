import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

import {
  createNewBoard,
  getMyBoards,
  getBoard,
  starredBoard,
  patchBoard,
  getRecentBoards,
  getStarredBoards,
} from '../services/apiBoard';

export function useBoards() {
  const {
    isLoading,
    data: boards,
    error,
  } = useQuery({
    queryKey: ['boards'],
    queryFn: getMyBoards,
    useErrorBoundary: true,
  });
  return { isLoading, error, boards };
}

export function useStarredBoards() {
  const {
    isLoading,
    data: boards,
    error,
  } = useQuery({
    queryKey: ['starred-boards'],
    queryFn: getRecentBoards,
    useErrorBoundary: true,
  });
  return { isLoading, error, boards };
}

export function useRecentBoards() {
  const {
    isLoading,
    data: boards,
    error,
  } = useQuery({
    queryKey: ['recent-boards', 'boards'],
    queryFn: getRecentBoards,
    useErrorBoundary: true,
  });
  return { isLoading, error, boards };
}

export function useBoard() {
  const { boardId } = useParams();

  const {
    isLoading,
    data: board,
    error,
  } = useQuery({
    queryKey: ['board', boardId],
    queryFn: () => getBoard(boardId),
    retry: false,
    useErrorBoundary: true,
  });
  return { isLoading, error, board };
}

export function useCreateBoard() {
  const queryClient = useQueryClient();

  const {
    mutate: createBoard,
    isLoading: isCreating,
    error,
  } = useMutation({
    mutationFn: createNewBoard,
    onSuccess: () => {
      toast.success('New board successfully created');
      queryClient.invalidateQueries({ queryKey: ['boards'], exact: true });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createBoard, error };
}

export function useStarredBoard() {
  const {
    mutate: favorBoard,
    isLoading: isFavoring,
    error,
  } = useMutation({
    mutationFn: starredBoard,
    onError: (err) => toast.error(err.message),
  });

  return { isFavoring, favorBoard, error };
}

export function useUpdateBoard() {
  const { boardId } = useParams();
  const queryClient = useQueryClient();

  const {
    mutate: updateBoard,
    isLoading: isUpdating,
    error,
  } = useMutation({
    mutationFn: patchBoard,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['board', boardId], exact: true });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isUpdating, updateBoard, error };
}

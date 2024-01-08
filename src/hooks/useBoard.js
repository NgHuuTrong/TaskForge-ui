import { useNavigate, useParams } from 'react-router-dom';
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
  getBoardMembers,
  deleteMemberFromBoard,
  // leaveBoard,
} from '../services/apiBoard';
import {
  createNewBoard,
  getMyBoards,
  getBoard,
  starredBoard,
  patchBoard,
  getBoardMembers,
  addUserToBoard,
  joinBoard,
  deleteBoard,
  leaveBoard,
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
    queryFn: getStarredBoards,
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

export function useBoardMembers(search) {
  const { boardId } = useParams();

  const {
    isLoading,
    data: members,
    error,
  } = useQuery({
    queryKey: ['board-members', boardId],
    queryFn: () => getBoardMembers(boardId, search),
    retry: false,
    useErrorBoundary: true,
  });
  return { isLoading, error, members };
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
      queryClient.invalidateQueries({ queryKey: ['workspaces'], exact: true });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createBoard, error };
}

export function useStarredBoard() {
  const queryClient = useQueryClient();
  const {
    mutate: favorBoard,
    isLoading: isFavoring,
    error,
  } = useMutation({
    mutationFn: starredBoard,
    onError: (err) => toast.error(err.message),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['starred-boards'] });
    },
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

export function useAddUserToBoard() {
  const queryClient = useQueryClient();
  const { boardId } = useParams();

  const {
    mutate: addUser,
    isLoading: isAdding,
    error,
  } = useMutation({
    mutationFn: addUserToBoard,
    onSuccess: () => {
      toast.success('Add member to board successfully');
      queryClient.invalidateQueries({ queryKey: ['board', boardId], exact: true });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isAdding, addUser, error };
}

export function useJoinBoard() {
  const queryClient = useQueryClient();
  const { boardId } = useParams();

  const {
    mutate,
    isLoading: isJoining,
    error,
  } = useMutation({
    mutationFn: joinBoard,
    onSuccess: () => {
      toast.success('Join board successfully');
      queryClient.invalidateQueries({ queryKey: ['board', boardId], exact: true });
      queryClient.invalidateQueries({ queryKey: ['boards'], exact: true });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isJoining, mutate, error };
}

export function useDeleteBoard() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const {
    mutate: removeBoard,
    isLoading: isDeleting,
    error,
  } = useMutation({
    mutationFn: deleteBoard,
    onSuccess: () => {
      toast.success('Board successfully removed');
      queryClient.invalidateQueries({ queryKey: ['workspaces'], exact: true });
      queryClient.invalidateQueries({ queryKey: ['boards'], exact: true });
      navigate('/boards');
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, removeBoard, error };
}

export function useLeaveBoard() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const {
    mutate,
    isLoading: isLeaving,
    error,
  } = useMutation({
    mutationFn: leaveBoard,
    onSuccess: () => {
      toast.success('Leave from board successfully');
      queryClient.invalidateQueries({ queryKey: ['workspaces'], exact: true });
      queryClient.invalidateQueries({ queryKey: ['boards'], exact: true });
      navigate('/boards');
    },
    onError: (err) => toast.error(err.message),
  });

  return { isLeaving, mutate, error };
}

export function useDeleteMemberFromBoard() {
  const { boardId } = useParams();
  const queryClient = useQueryClient();

  const {
    mutate: deleteBoardMember,
    isLoading: isDeleting,
    error,
  } = useMutation({
    mutationFn: deleteMemberFromBoard,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['board', boardId], exact: true });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteBoardMember, error };
}

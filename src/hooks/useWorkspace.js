import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

import {
  createNewWorkspace,
  getMyWorkspaces,
  getWorkspace,
  getWorkspaceMembers, patchWorkspace,
  deleteWorkspaceMember,
  deleteWorkspace,
  sendInvitationWorkspace,
  leaveWorkspace,
  getWorkspaceByToken,
  acceptWorkspaceLink,
} from '../services/apiWorkspace';

export function useWorkspaces() {
  const {
    isLoading,
    data: workspaces,
    error,
  } = useQuery({
    queryKey: ['workspaces'],
    queryFn: getMyWorkspaces,
    useErrorBoundary: true,
  });
  return { isLoading, error, workspaces };
}

export function useWorkspace() {
  const { workspaceId } = useParams();

  const {
    isLoading,
    data: workspace,
    error,
  } = useQuery({
    queryKey: ['workspace', workspaceId],
    queryFn: () => getWorkspace(workspaceId),
    retry: false,
    useErrorBoundary: true,
  });
  return { isLoading, error, workspace };
}

export function useCreateWorkspace() {
  const queryClient = useQueryClient();

  const { mutate: createWorkspace, isLoading: isCreating } = useMutation({
    mutationFn: createNewWorkspace,
    onSuccess: () => {
      toast.success('New workspace successfully created');
      queryClient.invalidateQueries({ queryKey: ['workspaces'] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createWorkspace };
}

export function useUpdateWorkspace() {
  const { workspaceId } = useParams();
  const queryClient = useQueryClient();

  const {
    mutate: updateWorkspace,
    isLoading: isUpdating,
    error,
  } = useMutation({
    mutationFn: patchWorkspace,
    onSuccess: () => {
      toast.success('Editted Successfully!');
      queryClient.invalidateQueries({ queryKey: ['workspace', workspaceId] });
      queryClient.invalidateQueries({ queryKey: ['workspaces'] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isUpdating, updateWorkspace, error };
}

export function useWorkspaceMembers(workspaceId) {
  const {
    isLoading,
    data: members,
    error,
  } = useQuery({
    queryKey: ['workspaceMembers', workspaceId],
    queryFn: () => getWorkspaceMembers(workspaceId),
    retry: false,
    useErrorBoundary: true,
  });
  return { isLoading, error, members };
}

export function useDeleteWorkspaceMember() {
  const queryClient = useQueryClient();
  const { workspaceId } = useParams();

  const { mutate: deleteWorkspaceUser, isLoading } = useMutation({
    mutationFn: ({ workspaceId, userId }) => deleteWorkspaceMember({ workspaceId, userId }),
    onSuccess: (data) => {
      toast.success('Delete user success');
      queryClient.invalidateQueries({ queryKey: ['workspace', workspaceId] });
      queryClient.invalidateQueries({ queryKey: ['workspaces'] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { deleteWorkspaceUser, isLoading };
}

export function useDeleteWorkspace() {
  const queryClient = useQueryClient();
  const { workspaceId } = useParams();
  const navigate = useNavigate();

  const { mutate: removeWorkspace, isLoading } = useMutation({
    mutationFn: ({ workspaceId }) => deleteWorkspace({ workspaceId }),
    onSuccess: (data) => {
      toast.success('Workspace deleted successfully');
      queryClient.invalidateQueries({ queryKey: ['workspace', workspaceId] });
      queryClient.invalidateQueries({ queryKey: ['workspaces'] });
      navigate('/boards', { replace: true });
    },
    onError: (err) => toast.error(err.message),
  });

  return { removeWorkspace, isLoading };
}

export function useSendInvitation() {
  const queryClient = useQueryClient();
  const { workspaceId } = useParams();

  const { mutate: sendInvitation, isLoading: isSending } = useMutation({
    mutationFn: sendInvitationWorkspace,
    onSuccess: () => {
      toast.success('Send invitation successfully');
      queryClient.invalidateQueries({ queryKey: ['workspace', workspaceId], exact: true });
      queryClient.invalidateQueries({ queryKey: ['workspaces'] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isSending, sendInvitation };
}

export function useLeaveWorkspace() {
  const queryClient = useQueryClient();
  const { workspaceId } = useParams();
  const navigate = useNavigate();

  const {
    mutate,
    isLoading: isLeaving,
    error,
  } = useMutation({
    mutationFn: leaveWorkspace,
    onSuccess: () => {
      navigate('/boards');
      toast.success('Leave from workspace successfully');
      queryClient.invalidateQueries({ queryKey: ['workspace', workspaceId], exact: true });
      queryClient.invalidateQueries({ queryKey: ['workspaces'] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isLeaving, mutate, error };
}

export function useWorkspaceByToken() {
  const { token } = useParams();

  const {
    isLoading,
    data: workspace,
    error,
  } = useQuery({
    queryKey: ['workspace', token],
    queryFn: () => getWorkspaceByToken(token),
    retry: false,
    useErrorBoundary: true,
  });

  return { isLoading, error, workspace };
}

export function useAcceptWorkspaceLink() {
  const queryClient = useQueryClient();
  const { token } = useParams();

  const {
    mutate,
    isLoading: isAccepting,
    error,
  } = useMutation({
    mutationFn: acceptWorkspaceLink,
    onSuccess: () => {
      toast.success('Accept workspace link invitation successfully');
      queryClient.invalidateQueries({ queryKey: ['workspace', token], exact: true });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isAccepting, mutate, error };
}
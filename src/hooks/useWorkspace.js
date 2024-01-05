import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

import { createNewWorkspace, getMyWorkspaces, getWorkspace, getWorkspaceMembers, patchWorkspace } from '../services/apiWorkspace';

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

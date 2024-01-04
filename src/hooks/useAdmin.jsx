import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { createTemplate, deleteTemplate, editTemplate, editUserStatus, getUsers } from '../services/apiAdmin';

export function useUsers() {
  const {
    isLoading,
    data: users,
    error,
  } = useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
    useErrorBoundary: true,
  });
  return { isLoading, error, users };
}

export function useDeleteTemplate() {
  const queryClient = useQueryClient();

  const {
    mutate: deleteTemplateById,
    isLoading: isDeleting,
    error,
  } = useMutation({
    mutationFn: deleteTemplate,
    onSuccess: () => {
      toast.success('Template successfully deleted');
      queryClient.invalidateQueries({ queryKey: ['templates'] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteTemplateById, error };
}

export function useEditTemplate() {
  const queryClient = useQueryClient();

  const {
    mutate: editTemplateById,
    isLoading: isEditing,
    error,
  } = useMutation({
    mutationFn: editTemplate,
    onSuccess: () => {
      toast.success('Template successfully edited');
      queryClient.invalidateQueries({ queryKey: ['templates'] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isEditing, editTemplateById, error };
}

export function useCreateTemplate() {
  const queryClient = useQueryClient();

  const {
    mutate: createNewTemplate,
    isLoading: isCreating,
    error,
  } = useMutation({
    mutationFn: createTemplate,
    onSuccess: () => {
      toast.success('Template successfully created');
      queryClient.invalidateQueries({ queryKey: ['templates'] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createNewTemplate, error };
}

export function useEditUserStatus() {
  const queryClient = useQueryClient();

  const {
    mutate: editUserStatusById,
    isLoading: isEditing,
    error,
  } = useMutation({
    mutationFn: editUserStatus,
    onSuccess: () => {
      toast.success('User edit successfully');
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isEditing, editUserStatusById, error };
}

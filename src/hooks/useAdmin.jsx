import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { deleteTemplate, getUsers } from '../services/apiAdmin';

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
      queryClient.invalidateQueries({ queryKey: ['templates'], exact: true });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteTemplateById, error };
}

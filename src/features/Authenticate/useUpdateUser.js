import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { patchPassword, updateCurrentUser } from '../../services/apiUser';

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isLoading } = useMutation({
    mutationFn: ({ username, bio, file }) => updateCurrentUser({ username, bio, file }),
    onSuccess: (data) => {
      toast.success('User account successfully updated');
      queryClient.setQueryData(['user'], data.user);
    },
  });

  return { updateUser, isLoading };
}

export function useUpdatePassword() {
  const {
    mutate: updatePassword,
    isLoading: isUpdating,
    error,
  } = useMutation({
    mutationFn: patchPassword,
    onSuccess: () => toast.success('Your password have been changed successfully!'),
    onError: (err) => toast.error(err.message),
  });

  return { isUpdating, updatePassword, error };
}

import { useQuery } from '@tanstack/react-query';
import { getCurrentUser } from '../../services/apiUser';

export function useUser() {
  const { isLoading, data, error } = useQuery({
    queryKey: ['user'],
    queryFn: getCurrentUser,
  });
  if (error) {
    console.log('error', error);
  }

  return { isLoading, user: data, error };
}

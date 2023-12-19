import { useQuery } from '@tanstack/react-query';
import { getCurrentUser } from '../../services/apiUser';

export function useUser() {
  const { isLoading, data: user } = useQuery({
    queryKey: ['token'],
    queryFn: getCurrentUser,
  });
  console.log(isLoading, user);
  return { isLoading, user, isAuthenticated: user?.role };
}

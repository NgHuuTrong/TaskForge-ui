import { useQuery } from '@tanstack/react-query';
import { getCurrentUser } from '../../services/apiUser';

export function useUser() {
  let isAuthenticated = false
  const { isLoading, data } = useQuery({
    queryKey: ['user'],
    queryFn: getCurrentUser,
  });

  if(data) {
    isAuthenticated = true
  }
  
  return { isLoading, user: data, isAuthenticated };
}

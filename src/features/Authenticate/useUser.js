import { useQuery } from '@tanstack/react-query';
import { getCurrentUser } from '../../services/apiUser';
import { useQueryClient } from '@tanstack/react-query';

export function useUser() {
  const queryClient = useQueryClient();
  const token = queryClient.getQueryData(['token']);
  let isAuthenticated = false
  const { isLoading, data } = useQuery({
    queryKey: ['user'],
    queryFn: () => getCurrentUser(token),
  });

  if(data) {
    isAuthenticated = true
  }
  
  return { isLoading, user: data, isAuthenticated };
}

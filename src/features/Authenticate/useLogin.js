import { useMutation, useQueryClient } from '@tanstack/react-query';
import { login as loginApi } from '../../services/apiAuth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import authAxios, { getToken } from '../../utils/axios';


export function useLogin() {

  const navigate = useNavigate();
  
  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (data) => {
      authAxios.defaults.headers.Authorization = `Bearer ${getToken()}`;
      navigate('/boards', { replace: true });
    },
    onError: (err) => {
      toast.error('Provided email or password are incorrect');
    },
  });

  return { login, isLoading };
}

import { useMutation } from '@tanstack/react-query';
import { login as loginApi } from '../../services/apiAuth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import authAxios, { getToken } from '../../utils/axios';

export function useLogin(data) {
  const { onSuccess } = data ? { ...data } : { onSuccess: null };
  const navigate = useNavigate();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: () => {
      authAxios.defaults.headers.Authorization = `Bearer ${getToken()}`;
      if (onSuccess) {
        onSuccess();
      } else {
        navigate('/boards', { replace: true });
      }
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { login, isLoading };
}

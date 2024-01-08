import { useMutation } from '@tanstack/react-query';
import {
  forgotPassword,
  login as loginApi,
  loginByGoogle,
  resetPassword,
  signup as signupApi,
} from '../../services/apiAuth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

export function useLogin() {
  const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: () => {
      navigate('/boards', { replace: true });
      toast.success('Sign in successfully!');
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { login, isLoading };
}

export function useLoginByGoogle() {
  const navigate = useNavigate();

  const {
    mutate: googleLogin,
    isLoading,
    error,
  } = useMutation({
    mutationFn: loginByGoogle,
    onSuccess: () => {
      navigate('/boards', { replace: true });
      toast.success('Sign in successfully!');
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { googleLogin, isLoading, error };
}

export function useSignup() {
  const navigate = useNavigate();

  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: () => {
      navigate('/boards', { replace: true });
      toast.success('Please verify your email to activate your account!');
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { signup, isLoading };
}

export function useForgotPassword() {
  const { mutate: sendReset, isLoading: isSending } = useMutation({
    mutationFn: forgotPassword,
    onSuccess: () => {
      toast.success('Mail have sent! Please check carefully!');
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { sendReset, isSending };
}

export function useResetPassword() {
  const navigate = useNavigate();

  const { mutate: resetPass, isLoading: isReseting } = useMutation({
    mutationFn: resetPassword,
    onSuccess: () => {
      navigate('/authenticate', { replace: true });
      toast.success('Done! Please sign in again!');
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { resetPass, isReseting };
}

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router';
import {
  forgotPassword,
  login as loginApi,
  loginByGoogle,
  logout as logoutApi,
  resetPassword,
  signup as signupApi,
} from '../services/apiAuth';
import toast from 'react-hot-toast';
import { getCurrentUser, patchPassword, updateCurrentUser } from '../services/apiUser';

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
  // const navigate = useNavigate();

  const {
    mutate: googleLogin,
    isLoading,
    error,
  } = useMutation({
    mutationFn: loginByGoogle,
    onSuccess: () => {
      // navigate('/boards', { replace: true });
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

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: logout, isLoading } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      queryClient.removeQueries();
      navigate('/authenticate', { replace: true });
      toast.success('Logged out successfully!');
    },
    onError: (err) => toast.error(err),
  });

  return { logout, isLoading };
}

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isLoading } = useMutation({
    mutationFn: ({ username, bio, file }) => updateCurrentUser({ username, bio, file }),
    onSuccess: (data) => {
      toast.success('User account successfully updated');
      queryClient.setQueryData(['user'], data.user);
    },
    onError: (err) => toast.error(err.message),
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

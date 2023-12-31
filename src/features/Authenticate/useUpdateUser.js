import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { updateCurrentUser } from "../../services/apiUser";

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

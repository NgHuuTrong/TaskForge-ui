import Spinner from './Spinner';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useUser } from '../hooks/useAuthenticate';
import toast from 'react-hot-toast';

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const location = useLocation();

  // 1. Load the authenticated user
  const { isLoading, user } = useUser();
  // navigate(0);
  // 2. If there is NO authenticated user, redirect to the /login
  useEffect(
    function () {
      if (!user && !isLoading) {
        if(location.pathname.includes('admin'))
          navigate('/admin/authenticate');
        else
          navigate('/authenticate');
      }
      if(user && user.role === "USER") {
        if (location.pathname.includes('admin')) {
          toast.error("This route is for ADMIN");
          navigate('/admin/authenticate');
        }
      }
    },
    [user, isLoading, navigate, location],
  );

  // 3. While loading, show a spinner
  if (isLoading)
    return (
      <div className="h-screen bg-[--color-grey-50] flex items-center justify-center">
        <Spinner />
      </div>
    );

  // 4. If there IS a user, render the app
  if (user) return children;
}

export default ProtectedRoute;

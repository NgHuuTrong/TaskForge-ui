// import styled from "styled-components";
import { useUser } from '../features/Authenticate/useUser';
import Spinner from './Spinner';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  // 1. Load the authenticated user
  const { isLoading, user } = useUser();
  // navigate(0);
  // 2. If there is NO authenticated user, redirect to the /login
  useEffect(
    function () {
      if (!user && !isLoading) navigate('/authenticate');
    },
    [user, isLoading, navigate],
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

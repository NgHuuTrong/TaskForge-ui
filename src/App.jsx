import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import AppLayout from './ui/AppLayout';
import Example from './pages/Example';
import Templates from './pages/Templates';
import Authenticate from './pages/Authentication';
import Boards from './pages/Boards';
import Home from './pages/Home';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import WorkspaceHome from './pages/WorkspaceHome';
import WorkspaceMember from './pages/WorkspaceMember';
import { DarkModeProvider } from './context/DarkModeContext';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <DarkModeProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Navigate replace to="example" />} />
              <Route path="example" element={<Example />} />
              <Route path="templates" element={<Templates />} />
              <Route path="boards" element={<Boards />} />
              <Route path="home" element={<Home />} />
              <Route path=":workspaceId/home" element={<WorkspaceHome />} />
              <Route path=":workspaceId/members" element={<WorkspaceMember />} />
            </Route>
            <Route path="authenticate" element={<Authenticate />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route path="reset-password" element={<ResetPassword />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </DarkModeProvider>
  );
}

export default App;

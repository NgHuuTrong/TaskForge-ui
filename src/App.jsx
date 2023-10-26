import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import AppLayout from './ui/AppLayout';
import Example from './pages/Example';
import { DarkModeProvider } from './context/DarkModeContext';
import Authenticate from './pages/Authentication';
import Boards from './pages/Boards';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import AddMember from './pages/AddMember';

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
              <Route path="boards" element={<Boards />} />
              <Route path="add-member" element={<AddMember />} />
            </Route>
            <Route element={<AppLayout />}>
              <Route index element={<Navigate replace to="authenticate" />} />
              <Route path="example" element={<Example />} />
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

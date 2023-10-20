import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import AppLayout from './ui/AppLayout';
import Example from './pages/Example';
import { DarkModeProvider } from './context/DarkModeContext';
<<<<<<< HEAD
<<<<<<< HEAD
import { Authenticate } from './pages/Authentication';
=======
import { Login } from './pages/Login';
>>>>>>> 730988d (add login/signup page)
=======
import { Authenticate } from './pages/Authentication';
>>>>>>> b0f0874 (update styling login/sign-up page)

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
            </Route>
            <Route
              path="authenticate"
              element={<Authenticate />}
            />
<<<<<<< HEAD
            <Route element={<AppLayout />}>
              <Route index element={<Navigate replace to="authenticate" />} />
              <Route path="example" element={<Example />} />
            </Route>
<<<<<<< HEAD
<<<<<<< HEAD
            <Route
              path="authenticate"
              element={<Authenticate />}
            />
=======
            <Route path="/login" element={<Login></Login>} />{' '}
>>>>>>> 730988d (add login/signup page)
=======
>>>>>>> b0f0874 (update styling login/sign-up page)
=======
>>>>>>> a1446c5 (fix router, z-index for header)
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </DarkModeProvider>
  );
}

export default App;

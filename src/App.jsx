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
import Settings from './pages/Settings';
import { DarkModeProvider } from './context/DarkModeContext';
import BoardDetailLayout from './features/Boards/layout/BoardDetailLayout';

const creator = {
  fullName: 'Lâm Khánh Hòa',
  username: 'hoalamkhanh',
  avatarPath:
    'https://th.bing.com/th/id/R.7ea4af7d8401d2b43ee841bfa2abe89d?rik=xidyUKdveUKULQ&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fuser-png-icon-download-icons-logos-emojis-users-2240.png&ehk=2%2bOqgdMZqFkKaBclc%2fPL9B86vLju3iBGiFmH64kXaTM%3d&risl=&pid=ImgRaw&r=0',
};

const members = [
  {
    fullName: 'Nguyen Huu Trong',
    username: 'trongnguyenhuu',
    avatarPath:
      'https://th.bing.com/th/id/R.7ea4af7d8401d2b43ee841bfa2abe89d?rik=xidyUKdveUKULQ&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fuser-png-icon-download-icons-logos-emojis-users-2240.png&ehk=2%2bOqgdMZqFkKaBclc%2fPL9B86vLju3iBGiFmH64kXaTM%3d&risl=&pid=ImgRaw&r=0',
  },
  {
    fullName: 'Nguyen Van Hieu',
    username: 'hieunguyenvan',
    avatarPath:
      'https://th.bing.com/th/id/R.7ea4af7d8401d2b43ee841bfa2abe89d?rik=xidyUKdveUKULQ&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fuser-png-icon-download-icons-logos-emojis-users-2240.png&ehk=2%2bOqgdMZqFkKaBclc%2fPL9B86vLju3iBGiFmH64kXaTM%3d&risl=&pid=ImgRaw&r=0',
  },
  {
    fullName: 'Tran Hai Nam',
    username: 'namtranhai',
    avatarPath:
      'https://th.bing.com/th/id/R.7ea4af7d8401d2b43ee841bfa2abe89d?rik=xidyUKdveUKULQ&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fuser-png-icon-download-icons-logos-emojis-users-2240.png&ehk=2%2bOqgdMZqFkKaBclc%2fPL9B86vLju3iBGiFmH64kXaTM%3d&risl=&pid=ImgRaw&r=0',
  },
  {
    fullName: 'To Phuoc Hung',
    username: 'hungtophuoc',
    avatarPath:
      'https://th.bing.com/th/id/R.7ea4af7d8401d2b43ee841bfa2abe89d?rik=xidyUKdveUKULQ&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fuser-png-icon-download-icons-logos-emojis-users-2240.png&ehk=2%2bOqgdMZqFkKaBclc%2fPL9B86vLju3iBGiFmH64kXaTM%3d&risl=&pid=ImgRaw&r=0',
  },
];

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
              <Route index element={<Navigate replace to="boards" />} />
              <Route path="example" element={<Example />} />
              <Route path="templates" element={<Templates />} />
              <Route path="boards" element={<Boards />} />
              <Route path="home" element={<Home />} />
              <Route path="/w/:workspaceId/home" element={<WorkspaceHome />} />
              <Route path="/w/:workspaceId/members" element={<WorkspaceMember />} />
            </Route>
            <Route element={<AppLayout headerOnly />}>
              <Route
                path="/b/:boardId/board-detail"
                element={<BoardDetailLayout isPrivate={false} creator={creator} membersList={members} />}
              />
            </Route>
            <Route path="authenticate" element={<Authenticate />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route path="reset-password" element={<ResetPassword />} />
            <Route path="u/settings" element={<Settings />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </DarkModeProvider>
  );
}

export default App;

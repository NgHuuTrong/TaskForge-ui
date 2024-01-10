import { Outlet } from 'react-router-dom';

import Sidebar from '../features/Sidebar/Sidebar';
import Header from '../features/Header/Header';

function AppLayout({ headerOnly = false }) {
  return (
    <div className="w-screen h-screen bg-[--color-grey-50] flex flex-col overflow-hidden">
      <Header />
      {!headerOnly ? (
        <div className="pt-[52px] flex justify-center overflow-hidden">
          <Sidebar />
          <main className="p-[2.4rem] w-full min-w-[30rem] max-w-[80%] bg-[--color-grey-50] overflow-y-auto">
            <Outlet />
          </main>
        </div>
      ) : (
        <div className="pt-[52px] h-screen">
          <Outlet />
        </div>
      )}
    </div>
  );
}

export default AppLayout;

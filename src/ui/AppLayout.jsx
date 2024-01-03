import { Outlet } from 'react-router-dom';

import Sidebar from '../features/Sidebar/Sidebar';
import Header from '../features/Header/Header';

function AppLayout({ headerOnly = false }) {
  return (
    <div className="min-h-screen bg-[--color-grey-50] flex flex-col relative">
      <Header />
      {!headerOnly ? (
        <div className="pt-[52px] flex justify-center overflow-y-auto h-full">
          <Sidebar />
          <main className="p-[2.4rem] w-full min-w-[30rem] max-w-[75%] bg-[--color-grey-50] overflow-y-scroll">
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

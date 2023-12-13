import { Outlet } from 'react-router-dom';

import Sidebar from '../features/Sidebar/Sidebar';
import Header from '../features/Header/Header';

function AppLayout({ headerOnly = false }) {
  return (
    <div className="h-screen w-full bg-[--color-grey-50] overflow-hidden relative">
      <Header />
      {!headerOnly ? (
        <div className="mt-[52px] flex justify-center overflow-scroll max-h-screen">
          <Sidebar />
          <main className="mx-[16px] mt-[40px] w-full min-w-[288px] max-w-[825px] bg-[--color-grey-50]">
            <div className="mx-auto my-0 flex flex-col">
              <Outlet />
            </div>
          </main>
        </div>
      ) : (
        <Outlet />
      )}
    </div>
  );
}

export default AppLayout;

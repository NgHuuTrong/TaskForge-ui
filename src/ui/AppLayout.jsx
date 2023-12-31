import { Outlet } from 'react-router-dom';

import Sidebar from '../features/Sidebar/Sidebar';
import Header from '../features/Header/Header';

function AppLayout({ headerOnly = false }) {
  return (
    <div className="min-h-screen bg-[--color-grey-50] flex flex-col relative">
      <Header />
      {!headerOnly ? (
        <div className="mt-[52px] flex justify-center overflow-scroll h-screen">
          <Sidebar />
          <main className="mx-[16px] mt-[40px] w-full min-w-[30rem] max-w-[75%] bg-[--color-grey-50]">
            <div className="mx-auto my-0 flex flex-col">
              <Outlet />
            </div>
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

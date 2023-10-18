import { Outlet } from 'react-router-dom';

import Header from './Header';
import Sidebar from './Sidebar';

function AppLayout() {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr] bg-[--color-grey-100]">
      <Header />
      <div className="flex justify-center">
        <Sidebar />
        <main className="mx-[16px] mt-[40px] w-full min-w-[288px] max-w-[825px] bg-[--color-grey-50]">
          <div className="mx-[auto] my-[0] flex max-w-[120rem] flex-col gap-[3.2rem]">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}

export default AppLayout;

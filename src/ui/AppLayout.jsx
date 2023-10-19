import { Outlet } from 'react-router-dom';

import Header from './Header';
import Sidebar from '../features/Sidebar/Sidebar';

function AppLayout() {
  return (
    <div className="flex h-full flex-col bg-[--color-grey-100]">
      <Header />
      <div className="mt-[52px] flex justify-center">
        <Sidebar />
        <main className="mx-[16px] mt-[40px] w-full min-w-[288px] max-w-[825px] bg-[--color-grey-50]">
          <div className="mx-[auto] my-[0] flex h-[2000px] max-w-[120rem] flex-col gap-[3.2rem]">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}

export default AppLayout;

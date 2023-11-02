import { Outlet } from 'react-router-dom';

import Sidebar from '../features/Sidebar/Sidebar';
import Header from '../features/Header/Header';

function AppLayout() {
  return (
    <div className="h-full w-full bg-[--color-grey-50] relative overflow-hidden">
      <Header />
      {/* <div className="mt-[52px] flex justify-center overflow-hidden min-h-screen">
        <Sidebar />
        <main className="mx-[16px] mt-[40px] w-full min-w-[288px] max-w-[825px] bg-[--color-grey-50]">
          <div className="mx-[auto] my-[0] flex max-w-[120rem] flex-col gap-[3.2rem]">
            <Outlet />
          </div>
        </main>
      </div> */}
      <Outlet />
    </div>
  );
}

export default AppLayout;

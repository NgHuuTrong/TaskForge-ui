import { Outlet } from 'react-router-dom';

import Header from './Header';
import Sidebar from './Sidebar';

function AppLayout() {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr]">
      <Header />
      <div className="grid grid-cols-[26rem_minmax(256px,825px)] justify-center mt-16">
        <Sidebar />
        <main className="bg-[--color-grey-50] px-[4.8rem] pb-[6.4rem] pt-16">
          <div className="mx-[auto] my-[0] flex max-w-[120rem] flex-col gap-[3.2rem]">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}

export default AppLayout;

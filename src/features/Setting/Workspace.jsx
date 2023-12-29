import React from 'react';

import { DownOutlined } from '@ant-design/icons';
import { Tree } from 'antd';
import { BsPeopleFill } from 'react-icons/bs';

function Workspace({ user }) {
  return (
    <div className="flex flex-col items-center mt-[50px] ">
      <div className="w-full max-w-[600px]">
        <div className="flex flex-row items-center gap-[1.5rem] mt-[40px] text-[2rem]">
          <BsPeopleFill />
          <h3>Workspace</h3>
        </div>
        <hr className="border my-[1rem]" />
        <Tree showLine switcherIcon={<DownOutlined />} onSelect={() => {}} treeData={user.workspace} />
      </div>
    </div>
  );
}

export default Workspace;

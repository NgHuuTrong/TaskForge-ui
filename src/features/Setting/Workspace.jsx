import React from 'react'

import { DownOutlined } from '@ant-design/icons';
import { Tree } from 'antd';
import { BsPeopleFill } from 'react-icons/bs';


function Workspace(props) {
  return (
    <div className='flex flex-col items-center mt-[50px] '>
      <div className='w-full max-w-[600px]'>
        <div className='text-[--color-grey-800] text-[20px] font-medium leading-[26px] mt-[40px]'>
          <div className='flex flex-row items-center gap-[10px]'>
            <BsPeopleFill/>
            <h3 className=''>Workspace</h3>
          </div>
          <hr className='border-[1px] mt-[10px]'/>
        </div>
        <Tree
          showLine
          switcherIcon={<DownOutlined />}
          onSelect={() => {}}
          treeData={props.user.workspace}
          className='mt-5'
          style={{
            backgroundColor: 'var(--color-grey-0)',
            color: 'var(--color-grey-800)'
          }}
        />
      </div>
    </div>
  )
}

export default Workspace
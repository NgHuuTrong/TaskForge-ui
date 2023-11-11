import React from 'react'
import { AiOutlineLock } from 'react-icons/ai';
import { BsPeople, BsCheck } from 'react-icons/bs';

function ChangeVisibilityContent({visibility, setVisibility, setChangeVisibilityBox}) {
  return (
    <div>
        <div onClick={() => {setVisibility('private'); setChangeVisibilityBox(false)}} className='p-[8px] rounded-[5px] hover:bg-[#8896a6] cursor-pointer'>
            <div className='flex gap-[5px] items-center'>
                <AiOutlineLock color='red'/>
                <span className='text-[16px]'>Private</span>
                {visibility === 'private' ? <BsCheck size={20} color='green'/> : <></>}
            </div>
            <div>
                <span>
                    Only board members can see and edit this board.
                </span>
            </div>
        </div>
        <div onClick={() => {setVisibility('workspace'); setChangeVisibilityBox(false)}} className='p-[8px] rounded-[5px] hover:bg-[#8896a6] cursor-pointer'>
            <div className='flex gap-[5px] items-center'>
                <BsPeople/>
                <span className='text-[16px]'>Workspace</span>
                {visibility === 'workspace' ? <BsCheck size={20} color='green'/> : <></>}
            </div>
            <div>
                <span>
                    All members of this workspace can see and edit this board.
                </span>
            </div>
        </div>
    </div>
  )
}

export default ChangeVisibilityContent
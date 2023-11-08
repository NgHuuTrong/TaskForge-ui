import React from 'react';
import { IoIosArrowBack, IoMdClose } from 'react-icons/io';

export const templates = [
    {
        key: 1,
        title: '1-on-1 Meetting Agenda',
        backgroundPath: 'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x320/350dda08d977f92d756f3d9ec111ea66/photo-1521495084171-3ad639e3d525.jpg',
    },
    {
        key: 2,
        title: 'Agile Board Template | Trello',
        backgroundPath: 'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x320/350dda08d977f92d756f3d9ec111ea66/photo-1521495084171-3ad639e3d525.jpg',
    },
    {
        key: 3,
        title: 'Company Overview',
        backgroundPath: 'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x320/350dda08d977f92d756f3d9ec111ea66/photo-1521495084171-3ad639e3d525.jpg',
    },
    {
        key: 4,
        title: 'Design Huddle ',
        backgroundPath: 'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x320/350dda08d977f92d756f3d9ec111ea66/photo-1521495084171-3ad639e3d525.jpg',
    }
]

function CreateFromTemplate() {

    const renderTemplatesList = () => (
        templates.map((item) => (
            <div onClick={() => {}} key={item.key} className='flex p-[5px] rounded-[5px] hover:bg-[#dcdfe4] cursor-pointer'>
                <img className='w-[40px] h-[32px] rounded-[4px] mr-[8px]' src={item.backgroundPath} alt="/" />
                <span className='text-[14px] leading-[16px] p-[4px] font-medium'>{item.title}</span>
            </div>
        ))
    )

  return (
    <div className='w-[304px] shadow-md border'>
      <div onClick={() => { }} className='flex flex-row justify-between items-center p-[10px]'>
        <div onClick={() => {}} className='p-[10px] rounded-[5px] hover:bg-[#dcdfe4] cursor-pointer'>
          <IoIosArrowBack />
        </div>
        <div>
          <span className='text-[#44546f] text-[14px] font-semibold'>
            Create from template
          </span>
        </div>
        <div onClick={() => { }} className='p-[10px] rounded-[5px] hover:bg-[#dcdfe4] cursor-pointer'>
          <IoMdClose />
        </div>
      </div>

      <div className='p-[12px]'>

        <div className='flex flex-col'>
          <span className='text-[12px] font-bold leading-[16px]'>
            Templates
          </span>
        </div>

        <div className='flex flex-col gap-[8px] mt-[12px]'>
            {renderTemplatesList()}
        </div>
        
      </div>
    </div>
  )
}

export default CreateFromTemplate
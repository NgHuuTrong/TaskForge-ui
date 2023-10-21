import React from 'react';
import TemplateCard from '../Templates/TemplateCard'

const TemplatesList = (props) => {
    const renderTemplatesList = () => {
        return (
            <div className='flex flex-row gap-[16px] mt-[32px]'>
                {props.category.templates.map((item) => 
                    <TemplateCard key={item.key} template={item}/>
                )}
            </div>
        )
    }
    return (
        <div>
            <div className='flex flex-row justify-between items-center mb-[6px] mt-[40px]'>
                <div className='flex flex-row'>
                    <img src={props.category.imagePath} alt=""  className='inline-block h-[24px] w-[24px] min-w-[24px] mr-[12px] rounded-[3px]'/>
                    <h2 className='leading-[24px] text-[20px] mb-0 font-semibold'>{props.category.title}</h2>
                </div>
                <div className='bg-[#f1f2f4] flex justify-between items-center font-medium rounded-[3px] px-[1rem] py-[0.25rem] text-[--color-grey-500] hover:bg-[#b3b9c4] cursor-pointer'>
                    <span className='text-[#172b4d] text-[14px] leading-[20px] font-medium px-[12px] py-[6px]'>More templates for {props.category.title}</span>
                </div>
            </div>
            {renderTemplatesList()}
        </div>
      )
  }

  export default TemplatesList
import React from 'react';

const CategoriesList = (props) => {
    return (
        <div className='flex justify-center mt-[24px] gap-[16px]'>
            {props.categoriesList.map((item) => 
                <div className='items-center flex flex-col text-center w-[104px] mb-[16px]' key={item.key}>
                <a href="" className='hover:[box-shadow:var(--ds-shadow-overlay,_0px_8px_12px_#091e4226,_0px_0px_1px_#091e424f)]'>
                    <img src={item.imagePath} alt="" className='rounded-[3px] h-[104px] w-[104px]'/>
                </a>
                <span className='text-[12px] leading-[16px] mt-[8px] capitalize'>{item.title}</span>
                </div>
            )}
        </div>
        
    )
  }

  export default CategoriesList
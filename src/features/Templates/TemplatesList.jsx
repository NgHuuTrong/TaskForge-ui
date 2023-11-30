import React from 'react';
import TemplateCard from '../Templates/TemplateCard';
import Button from '../../ui/Button';

const TemplatesList = (props) => {
  const renderTemplatesList = () => {
    return (
      <div className="flex gap-[16px] mt-[32px]">
        {props.category.templates.map((item) => (
          <TemplateCard key={item.key} template={item} />
        ))}
      </div>
    );
  };
  return (
    <>
      <div className="flex justify-between items-center mb-[6px] mt-[40px]">
        <div className="flex">
          <img
            src={props.category.imagePath}
            alt=""
            className="inline-block h-[24px] w-[24px] min-w-[24px] mr-[12px] rounded-[3px]"
          />
          <h2 className="leading-[24px] text-[20px] mb-0 font-semibold">{props.category.title}</h2>
        </div>
        <Button type="secondary">More templates for {props.category.title}</Button>
      </div>
      {renderTemplatesList()}
    </>
  );
};

export default TemplatesList;

import React from 'react';
import TemplateCard from '../Templates/TemplateCard';

const TemplatesList = ({ templates }) => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center">
        <img
          src={'https://trello.com/assets/32ad10f52fc078a76ea4.svg'}
          alt=""
          className="h-[2.4rem] w-[2.4rem] min-w-[2.4rem] mr-[1.2rem] rounded-lg"
        />
        <h2 className="text-[2rem] font-semibold">New and suggested templates</h2>
      </div>
      <div className="flex flex-wrap gap-[16px] mt-[32px]">
        {templates.map((template) => (
          <TemplateCard key={template.id} template={template} />
        ))}
      </div>
    </div>
  );
};

export default TemplatesList;

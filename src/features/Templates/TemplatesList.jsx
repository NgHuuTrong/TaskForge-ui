import React from 'react';
import TemplateCard from '../Templates/TemplateCard';

const TemplatesList = ({ templates }) => {
  return (
    <div className="flex flex-wrap gap-[16px] mt-[32px]">
      {templates.map((template) => (
        <TemplateCard key={template.id} template={template} />
      ))}
    </div>
  );
};

export default TemplatesList;

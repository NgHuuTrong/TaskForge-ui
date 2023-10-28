import React from 'react';
import Heading from '../../ui/Heading';
import ButtonImage from '../../ui/ButtonImage';
import MyDropdown from '../../ui/MyDropdown';

import templates from '../../data/templates.json';

const Templates = () => {
  return (
    <MyDropdown
      title="Templates"
      render={
        <div className="mt-4 w-[300px] rounded-xl bg-[--color-grey-0] p-4 border border-[--color-grey-300]">
          <Heading as="h5" classNames="text-[--color-grey-600] p-4">
            Top Templates
          </Heading>
          {templates.map((template) => (
            <div className="py-2 bg-inherit" key={template.id}>
              <ButtonImage
                height="40px"
                url={template.img}
                title={template.templateName}
                to="/"
                hasStarred={false}
              />
            </div>
          ))}
        </div>
      }
    />
  );
};

export default Templates;

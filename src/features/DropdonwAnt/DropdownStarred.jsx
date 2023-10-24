import React from 'react';
import ButtonImage from '../../ui/ButtonImage';
import MyDropdown from '../../ui/MyDropdown';

const DropdownStarred = ({ items, title }) => {
  const result = items.flatMap((item) =>
    item.projects
      .filter((project) => project.starred === true)
      .map((project) => ({
        nameWorkspace: item.nameWorkspace,
        project: project,
      })),
  );

  return (
    <MyDropdown
      title={title}
      render={
        <div className="mt-4 w-[280px] rounded-xl bg-[--color-grey-50] p-4">
          {result.map((item) => (
            <ButtonImage
              key={item.id}
              title={item.project.nameProject}
              subscription={item.nameWorkspace}
              to="/"
            />
          ))}
        </div>
      }
    ></MyDropdown>
  );
};

export default DropdownStarred;

import React from 'react';
import MyDropdown from '../../ui/MyDropdown';
import ButtonImage from '../../ui/ButtonImage';

const DropdownRecent = ({ items, title }) => {
  return (
    <MyDropdown
      title={title}
      render={
        <div className="mt-4 w-[280px] rounded-xl bg-[--color-grey-50] p-4">
          {items.map((item) => (
            <ButtonImage key={item.id} title={item.title} subscription={item.des} to="/" />
          ))}
        </div>
      }
    ></MyDropdown>
  );
};

export default DropdownRecent;

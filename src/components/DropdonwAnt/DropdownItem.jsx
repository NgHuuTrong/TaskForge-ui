import React from 'react';

const DropdownItem = ({ item }) => {
  console.log('ok');
  console.log(item);
  return (
    <a href="/">
      <div>{item.img}</div>
      <div>
        <div>{item.title}</div>
        <div>{item.des}</div>
      </div>
    </a>
  );
};

export default DropdownItem;

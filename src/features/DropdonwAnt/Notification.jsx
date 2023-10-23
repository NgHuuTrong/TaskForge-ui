import React from 'react';
import projectImg from '../../assets/project.jpeg';

const Notification = ({ item }) => {
  const { img, title, time } = item;
  return (
    <div className="flex my-5">
      <div className="mr-5 object-contain rounded-full">
        <img
          src={img ? img : projectImg}
          alt={'img-bg'}
          className="h-12 w-12 rounded-full bg-[--color-dark] bg-center object-cover"
        />
      </div>
      <div className="flex flex-col justify-center">
        <div className="flex text-lg font-medium">{title}</div>
        <div className="flex text-sm text-[--header-button-txt-hovered]">{time}</div>
      </div>
    </div>
  );
};

export default Notification;

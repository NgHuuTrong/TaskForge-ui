import React from 'react';

const CategoriesList = (props) => {
  return (
    <div className="mt-[24px] flex justify-center gap-[16px]">
      {props.categoriesList.map((item) => (
        <div
          className="mb-[16px] flex w-[104px] flex-col items-center text-center"
          key={item.key}
        >
          <a
            href="/"
            className="hover:[box-shadow:var(--ds-shadow-overlay,_0px_8px_12px_#091e4226,_0px_0px_1px_#091e424f)]"
          >
            <img
              src={item.imagePath}
              alt=""
              className="h-[104px] w-[104px] rounded-[3px]"
            />
          </a>
          <span className="mt-[8px] text-[12px] capitalize leading-[16px]">
            {item.title}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CategoriesList;

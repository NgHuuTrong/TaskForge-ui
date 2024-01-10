import React from 'react';
import { CopyOutlined, EyeOutlined } from '@ant-design/icons';
import Button from '../../ui/Button';
import { Dropdown } from 'antd';
import CreateBoard from '../Header/component/CreateBoard';

function randomNumber() {
  const number = Math.random() * 30000 + 10000;
  if (number >= 1000) {
    const formattedNumber = (number / 1000).toFixed(1);
    return `${formattedNumber}K`;
  } else {
    return number.toString();
  }
}

const TemplateCard = ({ template }) => {
  return (
    <div className="flex flex-col w-[45%] min-w-[18rem] md:w-[30%]">
      <div className="relative">
        <img className="rounded-xl w-full aspect-[2/1]" src={template.defaultBackground} alt="" />
        <img
          className="w-1/5 aspect-square rounded-xl border-[3px] border-solid absolute left-[0.8rem] bottom-[-0.8rem]"
          src={template.defaultBackground}
          alt=""
        />
      </div>
      <div className="flex flex-col gap-2 pb-[12px] px-[12px]">
        <span className="mt-[12px] text-[1.4rem] font-bold">{template.name}</span>
        <span className="text-[1.2rem] text-[--color-subtext]">by: @TaskForge_Team</span>

        <p className="text-[1.2rem]">{template.description}</p>

        <div className="flex gap-[1rem]">
          <span className="text-[1.2rem] text-[--color-subtext]">
            <CopyOutlined />
            <span>{randomNumber()}</span>
          </span>
          <span className="text-[1.2rem] text-[--color-subtext]">
            <EyeOutlined />
            <span>{randomNumber()}</span>
          </span>
        </div>
        <Dropdown
          getPopupContainer={(trigger) => trigger.parentElement}
          placement="right"
          trigger={['click']}
          overlayStyle={{ width: '31rem' }}
          dropdownRender={() => <CreateBoard template={template} />}
        >
          <Button size="normal" classNames="justify-center">
            Use template
          </Button>
        </Dropdown>
      </div>
    </div>
  );
};

export default TemplateCard;

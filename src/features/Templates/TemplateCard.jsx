import React from 'react';
import { CopyOutlined, EyeOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';

const TemplateCard = (props) => {
  function formatNumberToK(number) {
    if (number >= 1000) {
      const formattedNumber = (number / 1000).toFixed(1);
      return `${formattedNumber}K`;
    } else {
      return number.toString();
    }
  }
  return (
    <a className="hover:cursor-pointer" href="/">
      <div>
        <img
          className="rounded-[3px] hover:[box-shadow:var(--ds-shadow-overlay,_0px_8px_12px_#091e4226,_0px_0px_1px_#091e424f)]"
          src={props.template.backgroundPath}
          alt=""
        />
      </div>
      <div className="relative -mt-[36px] pb-[12px] pl-[12px] pr-[12px]">
        <img
          className="h-[48px] w-[48px] rounded-[25px] border-[3px] border-solid leading-[48px] [box-shadow:var(--ds-shadow-raised,_0px_1px_1px_#091e4240,_0px_0px_1px_#091e424f)]"
          src={props.template.avatarPath}
          alt=""
        />

        <div className="flex flex-col">
          <span className="mt-[12px] text-[14px] font-bold leading-[20px]">
            {props.template.name}
          </span>
          <span className="text-[12px] leading-[20px]">
            by {props.template.author}
          </span>
        </div>

        <div>
          <span className="text-[12px] leading-[20px]">
            {props.template.description}
          </span>
        </div>

        <div className="flex gap-[10px]">
          <Tooltip
            className="flex gap-[5px]"
            title={props.template.copies + ' Copies'}
            overlayInnerStyle={{ color: 'dark' }}
          >
            <span className="text-[12px] text-[#44546f]">
              <CopyOutlined />
              <span>{formatNumberToK(props.template.copies)}</span>
            </span>
          </Tooltip>
          <Tooltip
            className="flex gap-[5px]"
            title={props.template.views + ' Views'}
            overlayInnerStyle={{ color: 'dark' }}
          >
            <span className="text-[12px] text-[#44546f]">
              <EyeOutlined />
              <span>{formatNumberToK(props.template.views)}</span>
            </span>
          </Tooltip>
        </div>
      </div>
    </a>
  );
};

export default TemplateCard;

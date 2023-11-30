import React from 'react';
import { CopyOutlined, EyeOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
import { Link } from 'react-router-dom';

const TemplateCard = ({ template }) => {
  function formatNumberToK(number) {
    if (number >= 1000) {
      const formattedNumber = (number / 1000).toFixed(1);
      return `${formattedNumber}K`;
    } else {
      return number.toString();
    }
  }
  return (
    <Link to="">
      <img
        className="rounded-[3px] hover:[box-shadow:var(--ds-shadow-overlay,_0px_8px_12px_#091e4226,_0px_0px_1px_#091e424f)]"
        src={template.backgroundPath}
        alt=""
      />
      <div className="relative pb-[12px] pl-[12px] pr-[12px]">
        <img
          className="h-[48px] w-[48px] rounded-[25px] border-[3px] border-solid leading-[48px] [box-shadow:var(--ds-shadow-raised,_0px_1px_1px_#091e4240,_0px_0px_1px_#091e424f)]"
          src={template.avatarPath}
          alt=""
        />

        <div className="flex flex-col">
          <span className="mt-[12px] text-[1.4rem] font-bold leading-[2rem]">{template.name}</span>
          <span className="text-[1.2rem] leading-[2rem]">by {template.author}</span>
        </div>

        <span className="text-[1.2rem] leading-[2rem]">{template.description}</span>

        <div className="flex gap-[1rem]">
          <Tooltip className="flex gap-[5px]" title={template.copies + ' Copies'}>
            <span className="text-[1.2rem] text-[--color-subtext]">
              <CopyOutlined />
              <span>{formatNumberToK(template.copies)}</span>
            </span>
          </Tooltip>
          <Tooltip className="flex gap-[0.4rem]" title={template.views + ' Views'}>
            <span className="text-[1.2rem] text-[--color-subtext]">
              <EyeOutlined />
              <span>{formatNumberToK(template.views)}</span>
            </span>
          </Tooltip>
        </div>
      </div>
    </Link>
  );
};

export default TemplateCard;

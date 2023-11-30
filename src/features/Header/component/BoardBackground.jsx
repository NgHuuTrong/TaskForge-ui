import { Popover } from 'antd';
import { useState } from 'react';
import { IoIosCheckmark, IoIosMore } from 'react-icons/io';

import BgPopover from './BgPopover';
import bgImage from '../../../data/bgImage.json';
import bgColor from '../../../data/bgColor.json';

const PopoverHeader = (
  <div className="flex flex-row justify-center items-center">
    <span className="text-[--color-subtext] text-[14px] font-semibold mx-[10px]">Board background</span>
  </div>
);

function BoardBackground() {
  const [selectedIndex, setSelectedIndex] = useState(1);
  const [backgroundType, setBackgroundType] = useState('image');

  const renderBackgroundImageList = () => {
    return bgImage.map(
      (item) =>
        item.key < 5 && (
          <div
            onClick={() => {
              setSelectedIndex(item.key);
              setBackgroundType('image');
            }}
            key={item.key}
            className="flex w-[64px] h-[40px] rounded-[3px]"
            style={{ backgroundImage: `url(${item.backgroundPath})`, backgroundSize: 'cover' }}
          >
            {selectedIndex === item.key && backgroundType === 'image' && (
              <div className="flex w-full h-full justify-center items-center">
                <IoIosCheckmark size={36} color="white" />
              </div>
            )}
          </div>
        ),
    );
  };

  const renderBackgroundColorList = () => {
    return (
      <>
        {bgColor.map(
          (item, index) =>
            index < 5 && (
              <div
                onClick={() => {
                  setSelectedIndex(item.key);
                  setBackgroundType('color');
                }}
                key={item.key}
                className="flex w-[40px] h-[32px] rounded-[3px]"
                style={{ backgroundImage: `${item.backgroundPath}`, backgroundSize: 'cover' }}
              >
                {selectedIndex === item.key && backgroundType === 'color' && (
                  <div className="flex w-full h-full justify-center items-center">
                    <IoIosCheckmark size={36} color="white" />
                  </div>
                )}
              </div>
            ),
        )}

        <Popover
          className="flex justify-center items-center w-[40px] h-[32px] hover:bg-[--color-grey-200] rounded-[3px]"
          arrow={false}
          placement="right"
          title={PopoverHeader}
          content={
            <BgPopover
              selectedIndex={selectedIndex}
              setSelectedIndex={setSelectedIndex}
              backgroundType={backgroundType}
              setBackgroundType={setBackgroundType}
            />
          }
          trigger="click"
        >
          <div>
            <IoIosMore size={24} color="var(--color-grey-500)" />
          </div>
        </Popover>
      </>
    );
  };
  return (
    <>
      <div className="flex justify-center mt-[8px]">
        <div
          className="flex justify-center w-[200px] h-[120px] bg-cover rounded-[3px] mt-[8px]"
          style={{
            backgroundImage:
              backgroundType === 'image'
                ? `url(${bgImage[selectedIndex - 1].backgroundPath})`
                : `${bgColor[selectedIndex - 1].backgroundPath}`,
          }}
        >
          <img className="p-[1rem]" src="https://trello.com/assets/14cda5dc635d1f13bc48.svg" alt="/" />
        </div>
      </div>

      <div className="flex flex-col gap-[0.6rem] mt-[1.6rem]">
        <span className="text-[1.2rem] font-bold">Background</span>
        <div className="flex justify-between">{renderBackgroundImageList()}</div>
        <div className="flex justify-between">{renderBackgroundColorList()}</div>
      </div>
    </>
  );
}

export default BoardBackground;

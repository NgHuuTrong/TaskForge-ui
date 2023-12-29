import { IoIosCheckmark } from 'react-icons/io';

import bgImage from '../../../data/bgImage.json';
import bgColor from '../../../data/bgColor.json';

function BgPopover({ selectedIndex, setSelectedIndex, backgroundType, setBackgroundType }) {
  const renderPopoverBackgroundImageList = () => {
    return bgImage.map((item) => (
      <div
        onClick={() => {
          setSelectedIndex(item.key);
          setBackgroundType('image');
        }}
        key={item.key}
        className="flex h-[56px] w-[31%] rounded-[3px]"
        style={{ bgImage: `url(${item.backgroundPath})`, backgroundSize: 'cover' }}
      >
        {selectedIndex === item.key && backgroundType === 'image' ? (
          <div className="w-full h-full hover:cursor-pointer">
            <div className="flex w-full h-full justify-center items-center bg-[--create-board-button-hovered]">
              <IoIosCheckmark size={30} color="white" />
            </div>
          </div>
        ) : (
          <div className="w-full h-full hover:cursor-pointer hover:bg-[--create-board-button-hovered]"></div>
        )}
      </div>
    ));
  };

  const renderPopoverBackgroundColorList = () => {
    return bgColor.map((item) => (
      <div
        onClick={() => {
          setSelectedIndex(item.key);
          setBackgroundType('color');
        }}
        key={item.key}
        className="flex h-[56px] w-[31%] rounded-[3px]"
        style={{ bgImage: `${item.backgroundPath}`, backgroundSize: 'cover' }}
      >
        {selectedIndex === item.key && backgroundType === 'color' ? (
          <div className="w-full h-full hover:cursor-pointer">
            <div className="flex w-full h-full justify-center items-center bg-[--create-board-button-hovered]">
              <IoIosCheckmark size={30} color="white" />
            </div>
          </div>
        ) : (
          <div className="w-full h-full hover:cursor-pointer hover:bg-[--create-board-button-hovered]"></div>
        )}
      </div>
    ));
  };

  return (
    <div className="w-[304px]">
      <div className="my-[16px]">
        <span className="text-[14px] font-semibold my-[20px]">Photos</span>
      </div>
      <div className="flex flex-wrap justify-between gap-[10px] w-full">{renderPopoverBackgroundImageList()}</div>
      <div>
        <div className="my-[16px]">
          <span className="text-[14px] font-semibold">Colors</span>
        </div>
        <div className="flex flex-wrap justify-between gap-[10px] w-full">{renderPopoverBackgroundColorList()}</div>
      </div>
    </div>
  );
}

export default BgPopover;

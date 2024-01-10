import { Upload } from 'antd';
import { AiOutlinePlus } from 'react-icons/ai';
import { BsUpload } from 'react-icons/bs';
import { PiSelectionBackground } from 'react-icons/pi';
import bgColor from '../../../data/bgColor.json';
import bgImage from '../../../data/bgImage.json';
import Button from '../../../ui/Button';
import { useUpdateBoard } from '../../../hooks/useBoard';
import { useParams } from 'react-router-dom';

export function BgList({ isPhotos, setBackground }) {
  const { boardId } = useParams();
  const { updateBoard, isUpdating } = useUpdateBoard();
  const listBackground = isPhotos ? bgImage : bgColor;
  const handleBackground = (background) => {
    console.log(background);
    updateBoard({ boardId, body: { background: background } });
    setBackground(background);
  };
  return (
    <div className="flex flex-col gap-[10px] w-full">
      <div className="flex flex-wrap justify-between gap-[10px] w-full">
        {listBackground.map((background) => (
          <button
            disabled={isUpdating}
            onClick={() => handleBackground(background.backgroundPath)}
            key={background.key}
            className="flex h-[9rem] w-[48%] rounded-[8px] hover:opacity-70 cursor-pointer"
            style={{
              backgroundImage: `${isPhotos ? 'url(' + background.backgroundPath + ')' : background.backgroundPath}`,
              backgroundSize: 'cover',
            }}
          />
        ))}
      </div>
    </div>
  );
}

function ChangeBg({ setMoreHistory }) {
  return (
    <div className="flex flex-col gap-[1rem]">
      <div className="flex items-center gap-[1rem]">
        <PiSelectionBackground size={24} />
        <span className="text-[1.6rem] leading-[2rem] font-semibold">Change background</span>
      </div>

      <div className="flex justify-around gap-4">
        <div
          className="flex flex-col items-center w-1/2 cursor-pointer"
          onClick={() => setMoreHistory((prev) => [...prev, { title: 'Photo', component: 'PhotoBackground' }])}
        >
          <img
            className="rounded-[8px] w-full h-[96px] hover:opacity-70"
            src="https://trello.com/assets/8f9c1323c9c16601a9a4.jpg"
            alt="/"
          />
          <span>Photos</span>
        </div>

        <div
          className="flex flex-col items-center w-1/2 cursor-pointer"
          onClick={() => setMoreHistory((prev) => [...prev, { title: 'Photo', component: 'ColorBackground' }])}
        >
          <img
            className="rounded-[8px] w-full h-[96px] hover:opacity-70"
            src="https://trello.com/assets/97db30fe74a58b7b7a18.png"
            alt="/"
          />
          <span>Colors</span>
        </div>
      </div>

      <div className="flex items-center gap-[1rem]">
        <BsUpload size={16} />
        <span className="text-[16px] leading-[20px] font-semibold">Custom</span>
      </div>

      <Upload>
        <Button type="icon" size="mass">
          <AiOutlinePlus size={36} color="var(--color-grey-500)" />
        </Button>
      </Upload>
    </div>
  );
}

export default ChangeBg;

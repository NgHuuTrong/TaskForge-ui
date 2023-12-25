import { useState } from 'react';
import { useStarredBoard, useUpdateBoard } from '../../../hooks/useBoard';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';

import { Input } from 'antd';
import toast from 'react-hot-toast';
function LeftSection({ board }) {
  const [changeTitleBox, setChangeTitleBox] = useState(false);
  const [favorite, setFavorite] = useState(board.curMember.starred);
  const [currTitle, setCurrTitle] = useState(board.name);
  const { favorBoard, isFavoring } = useStarredBoard();
  const { updateBoard, isUpdating } = useUpdateBoard();
  const handleStarredClick = (status) => {
    setFavorite(status);
    favorBoard(
      { starred: status, boardId: board.id },
      { onSuccess: () => toast.success(status ? 'Starred successfully!' : 'Unstarred successfully!') },
    );
  };

  const handleChangedTitle = (e) => {
    const changedTitle = e.target.value || board.name;
    if (e.target.value !== board.name)
      updateBoard(
        { body: { name: changedTitle }, boardId: board.id },
        { onSuccess: () => toast.success('Board name has already changed successfully!') },
      );
    setCurrTitle(changedTitle);
    setChangeTitleBox(false);
  };
  return (
    <div className="flex items-center gap-[1rem]">
      <div className="w-[25rem] overflow-hidden whitespace-nowrap">
        {changeTitleBox ? (
          <Input
            style={{ color: 'white', textAlign: 'center' }}
            className="h-[3.2rem] text-[1.8rem] font-bold"
            onPressEnter={handleChangedTitle}
            onBlur={handleChangedTitle}
            onChange={(e) => setCurrTitle(e.target.value)}
            value={currTitle}
            autoFocus
            disabled={isUpdating}
          />
        ) : (
          <div
            onClick={() => setChangeTitleBox(true)}
            className="text-[1.8rem] text-white font-bold leading-[3.2rem] text-center hover:bg-slate-600"
          >
            {currTitle}
          </div>
        )}
      </div>

      {favorite ? (
        <button
          disabled={isFavoring}
          onClick={() => handleStarredClick(false)}
          className="p-[8px] rounded-[5px] hover:bg-slate-600 cursor-pointer"
        >
          <AiFillStar color="yellow" />
        </button>
      ) : (
        <button
          disabled={isFavoring}
          onClick={() => handleStarredClick(true)}
          className="p-[8px] rounded-[5px] hover:bg-slate-600 cursor-pointer"
        >
          <AiOutlineStar color="white" />
        </button>
      )}
    </div>
  );
}

export default LeftSection;

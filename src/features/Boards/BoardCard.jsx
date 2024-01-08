import { AiOutlineStar } from 'react-icons/ai';
import { MdLockOutline } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useUser } from '../../hooks/useAuthenticate';

function BoardCard({ board }) {
  const { user } = useUser();
  const [isMember, setIsMember] = useState(false);

  useEffect(() => {
    if (user && board) {
      setIsMember(board?.boardMembers?.some((bm) => bm.userId === user.id));
    }
  }, [user, board]);

  return (
    <Link
      to={(board.visibility || isMember) && `/b/${board.id}/board-detail`}
      className="flex w-[19%] min-w-[12rem] bg-center bg-cover rounded-md mr-[2%] mb-[2%]"
      style={{
        backgroundImage: `url(${
          board.background ||
          'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x320/350dda08d977f92d756f3d9ec111ea66/photo-1521495084171-3ad639e3d525.jpg'
        })`,
      }}
    >
      <div
        className={`w-full aspect-video p-[0.8rem] ${
          !board.visibility && !isMember ? 'bg-black/50' : 'bg-transparent hover:bg-black/20'
        } relative group/item`}
      >
        <span className="text-white font-bold flex gap-[0.4rem]">
          {!board.visibility && !isMember && <MdLockOutline className="text-[2rem] text-red-700" />} {board.name}
        </span>
        {isMember && (
          <div className="absolute bottom-[1rem] right-[1rem] invisible translate-x-3 group-hover/item:visible group-hover/item:translate-x-0 transition-all duration-300">
            <AiOutlineStar className="text-white hover:scale-125" />
          </div>
        )}
      </div>
    </Link>
  );
}

export default BoardCard;

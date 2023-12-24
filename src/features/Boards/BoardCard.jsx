import { AiOutlineStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function BoardCard({ board }) {
  return (
    <Link
      to={`/b/${board.id}/board-detail`}
      className="flex w-[23%] min-w-[12rem] bg-center bg-cover rounded-md mr-[2%] mb-[2%]"
      style={{
        backgroundImage: `url(${
          board.background ||
          'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x320/350dda08d977f92d756f3d9ec111ea66/photo-1521495084171-3ad639e3d525.jpg'
        })`,
      }}
    >
      <div className="w-full h-[9.6rem] p-[0.8rem] bg-transparent hover:bg-black/20 relative group/item">
        <span className="text-white font-bold">{board.name}</span>
        <div className="absolute bottom-[1rem] right-[1rem] invisible translate-x-3 group-hover/item:visible group-hover/item:translate-x-0 transition-all duration-300">
          <AiOutlineStar className="text-white hover:scale-125" />
        </div>
      </div>
    </Link>
  );
}

export default BoardCard;

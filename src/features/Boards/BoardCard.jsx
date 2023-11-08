import { AiOutlineStar } from 'react-icons/ai';

function BoardCard({
  board = {
    boardName: 'Board name',
    workspaceName: 'test',
    img: null,
  },
  type = 'normal'
}) {
  return (
    <div
      className="w-[23%] bg-center bg-cover rounded-md cursor-pointer mr-[2%] mb-[2%]"
      style={{
        backgroundImage: `url(${
          board.img ||
          'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/615x960/85db5179991ab12eb75dbf72228430ed/photo-1669183213616-6fcc8a3e2226.jpg'
        })`,
      }}
    >
      <div className="w-full h-[9.6rem] p-[0.8rem] bg-transparent hover:bg-black/20 relative group/item">
        <span className="text-white font-bold">{board.boardName}</span>
        <div className="absolute bottom-[1rem] right-[1rem] invisible translate-x-3 group-hover/item:visible group-hover/item:translate-x-0 transition-all duration-300">
          <AiOutlineStar className="text-white hover:scale-125" />
        </div>
      </div>
    </div>
  );
}

export default BoardCard;

import { AiOutlineStar } from 'react-icons/ai';
import Heading from '../../ui/Heading';
import ButtonImage from '../../ui/ButtonImage';
import starred from '../../data/starred.json';
function Starred() {
  return (
    <div>
      <div className="flex items-center gap-[4px] mb-8">
        <AiOutlineStar size={16} />
        <Heading as="h5">Starred</Heading>
      </div>
      {starred.map((board) => (
        <ButtonImage
          key={board.id}
          title={board.boardName}
          subscription={board.workspaceName}
          url={board.img}
          to={'/b/' + board.id + '/board-detail'}
        />
      ))}
    </div>
  );
}

export default Starred;

import Heading from '../../ui/Heading';
import BoardCard from '../Boards/BoardCard';

function BoardSection({ items, title }) {
  return (
    <div className="space-y-10 pb-[2rem]">
      <Heading classNames="flex items-center gap-4" as="h4">
        {title}
      </Heading>
      <div className="flex flex-wrap">
        {items.map((item) => (
          <BoardCard board={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default BoardSection;

import { HiPlus } from 'react-icons/hi2';
import ButtonImage from '../../ui/ButtonImage';
import Heading from '../../ui/Heading';

function Links() {
  return (
    <div className="mt-12">
      <Heading as="h5" classNames="mb-4">
        Links
      </Heading>
      <ButtonImage
        type="custom"
        custom={
          <div className="mr-[8px] rounded-[6px] bg-[--color-grey-200] p-[8px] hover:bg-[--color-grey-300]">
            <HiPlus size={16} />
          </div>
        }
        to="/"
        title="Create a board"
        hasStarred={false}
      />
    </div>
  );
}

export default Links;

import { AiOutlineStar } from 'react-icons/ai';
import Heading from '../../ui/Heading';
import ButtonImage from '../../ui/ButtonImage';

function Starred() {
  return (
    <div>
      <div className="flex items-center gap-[4px] mb-8">
        <AiOutlineStar size={16} />
        <Heading as="h5">Starred</Heading>
      </div>
      <ButtonImage
        url="https://trello-backgrounds.s3.amazonaws.com/SharedBackground/720x960/e06eb3ab5bd0f8ab762098b7aa42cb1d/photo-1696144706485-ff7825ec8481.jpg"
        to="/"
        title="Example Project"
        subscription="Example subscription"
      />
      <ButtonImage
        url="https://trello-backgrounds.s3.amazonaws.com/SharedBackground/720x960/e06eb3ab5bd0f8ab762098b7aa42cb1d/photo-1696144706485-ff7825ec8481.jpg"
        to="/"
        title="Example Project"
        subscription="Example subscription"
      />
    </div>
  );
}

export default Starred;

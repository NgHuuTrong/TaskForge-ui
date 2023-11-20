import { Avatar } from 'antd';
import { BsPlusLg } from 'react-icons/bs';
import MembersPopover from './MembersPopover';
import CardDetailMemberList from './CardDetailMemberList';

function CardDetailMembers() {
  return (
    <div className="ml-[2rem] space-y-2">
      <h1 className="text-[1.3rem] font-medium text-[--color-grey-600]">
        Members
      </h1>
      <div className="flex items-center gap-5">
        <CardDetailMemberList size={'default'}></CardDetailMemberList>
        <MembersPopover>
          <Avatar className="flex cursor-pointer items-center justify-center bg-[--color-grey-300] text-[--color-grey-700] hover:bg-[--color-grey-200]">
            <BsPlusLg size="1.8rem" />
          </Avatar>
        </MembersPopover>
      </div>
    </div>
  );
}

export default CardDetailMembers;

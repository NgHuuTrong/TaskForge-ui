import { AiOutlineLink } from 'react-icons/ai';

import Button from '../../ui/Button';
import Heading from '../../ui/Heading';

function InviteMember() {
  return (
    <>
      <Heading as="h3">Invite members to join you</Heading>
      <div className="flex justify-between">
        <Heading as="h5" classNames="font-normal w-1/2">
          Anyone with an invite link can join this Workspace. You can also disable and create a new invite link for this
          Workspace at any time.
        </Heading>
        <div className="w-1/2 flex justify-end">
          <Button size="normal" type="icon">
            Disable invite link
          </Button>
          <Button size="normal" type="text">
            <AiOutlineLink className="mr-[0.4rem]" />
            Invite with link
          </Button>
        </div>
      </div>
      <hr className="border-[--color-grey-300] my-[1.6rem]" />
    </>
  );
}

export default InviteMember;

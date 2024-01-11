import { AiOutlineLink } from 'react-icons/ai';
import copy from 'clipboard-copy';
import Button from '../../ui/Button';
import Heading from '../../ui/Heading';
import toast from 'react-hot-toast';

function InviteMember({inviteToken}) {
  const domain = window.location.host;

  const handleCopyLink = async () => {
    try {
      await copy(domain + '/w/invite/' + inviteToken);
      toast.success('Copy to clipboard successfully');
    } catch (err) {
      console.error('Failed to copy to clipboard', err);
      toast.error('Cannot copy invite link');
    }
  };

  return (
    <>
      <Heading as="h3">Invite members to join you</Heading>
      <div className="flex justify-between">
        <Heading as="h5" classNames="font-normal w-1/2">
          Anyone with an invite link can join this Workspace. You can also disable and create a new invite link for this
          Workspace at any time.
        </Heading>
        <div className="w-1/2 flex justify-end items-center">
          <Button size="normal" type="icon">
            Disable invite link
          </Button>
          <Button size="normal" type="text" onClick={()=>handleCopyLink()}>
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

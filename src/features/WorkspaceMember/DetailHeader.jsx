import { AiOutlineUserAdd } from 'react-icons/ai';
import Button from '../../ui/Button';
import EditWorkspace from '../../ui/EditWorkspace';
import Heading from '../../ui/Heading';

function DetailHeader({ workspace }) {
  return (
    <>
      <div className="flex justify-between items-start">
        <EditWorkspace workspace={workspace} />
        <Button size="normal">
          <AiOutlineUserAdd size={16} />
          <span className="ml-[0.6rem]">Invite Workspace members</span>
        </Button>
      </div>
      <hr className="border-[--color-grey-300] my-[1.6rem]" />
      <Heading as="h3">Workspace members (30)</Heading>
      <Heading as="h5" classNames="font-normal">
        Workspace members can view and join all Workspace visible boards and create new boards in the Workspace.
      </Heading>
      <hr className="border-[--color-grey-300] my-[1.6rem]" />
    </>
  );
}

export default DetailHeader;

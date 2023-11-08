import { HiXMark } from 'react-icons/hi2';
import Button from '../../ui/Button';
import UserDetail from '../../ui/UserDetail';

function MemberRow({ user }) {
  return (
    <>
      <div className="flex justify-between">
        <UserDetail user={user} />
        <div className="flex items-center">
          <Button size="normal" type="icon" disabled>
            Admin
          </Button>
          <Button size="normal" type="icon">
            <HiXMark size={16} className="mr-2" />
            Remove...
          </Button>
        </div>
      </div>
      <hr className="border-[--color-grey-300]" />
    </>
  );
}

export default MemberRow;

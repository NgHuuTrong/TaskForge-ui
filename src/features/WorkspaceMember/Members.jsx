import { Input } from 'antd';
import MemberRow from './MemberRow';

function Members({ users }) {
  return (
    <>
      <Input placeholder="Filter by name" className="w-[28rem]" />
      <hr className="border-[--color-grey-300] mt-[1.6rem]" />

      {users.map((user) => (
        <MemberRow key={user.id} user={user} />
      ))}
    </>
  );
}

export default Members;

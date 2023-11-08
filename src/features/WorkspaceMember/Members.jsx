import { Input } from 'antd';
import MemberRow from './MemberRow';

function Members({ users }) {
  return (
    <>
      <Input
        placeholder="Filter by name"
        className="w-[28rem] bg-[--color-grey-0] border-[--color-grey-300] text-[--color-grey-600] px-[1.2rem] py-[0.8rem] font-normal text-[1.4rem] placeholder:text-[--color-grey-600]"
      />
      <hr className="border-[--color-grey-300] mt-[1.6rem]" />

      {users.map((user) => (
        <MemberRow key={user.id} user={user} />
      ))}
    </>
  );
}

export default Members;

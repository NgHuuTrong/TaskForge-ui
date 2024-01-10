import { Input } from 'antd';
import MemberRow from './MemberRow';
import { useEffect, useState } from 'react';

function Members({ users, workspace, deleteWorkspaceUser }) {
  const [search, setSearch] = useState('');
  const [userSearch, setUsersearch] = useState(users);

  useEffect(() => {
    setUsersearch(users);
  }, [users]);

  function handleSearch(e) {
    if (e.target.value.trim() === '') {
      setUsersearch(users);
    } else {
      setUsersearch(
        users.filter((user) => {
          if (
            user.name.toLowerCase().includes(e.target.value.trim().toLowerCase()) ||
            user.username.toLowerCase().includes(e.target.value.trim().toLowerCase())
          )
            return true;
          return false;
        }),
      );
    }
    setSearch(e.target.value);
  }
  return (
    <>
      <Input value={search} onChange={handleSearch} placeholder="Filter by name" className="w-[28rem]" />
      <hr className="border-[--color-grey-300] mt-[1.6rem]" />

      {userSearch.map((user) => (
        <MemberRow key={user.id} user={user} workspace={workspace} deleteWorkspaceUser={deleteWorkspaceUser} />
      ))}
    </>
  );
}

export default Members;

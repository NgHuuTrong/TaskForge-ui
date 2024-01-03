import { Avatar } from 'antd';
import UserDetail from '../../../../ui/UserDetail';

function CardDetailMemberList({ size, members }) {
  return (
    <Avatar.Group
      maxCount={2}
      maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf' }}
      size={size}
    >
      {
        members.map((member) => <UserDetail key={member.id} showDetail={false} size={28} user={member} />)
      }
    </Avatar.Group>
  );
}

export default CardDetailMemberList;

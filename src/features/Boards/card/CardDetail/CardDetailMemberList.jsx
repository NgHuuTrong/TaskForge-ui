import { Avatar } from 'antd';

function CardDetailMemberList({ size }) {
  return (
    <Avatar.Group
      maxCount={2}
      maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf' }}
      size={size}
    >
      <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2" />
      <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
      <Avatar style={{ backgroundColor: '#87d068' }}>K</Avatar>
      <Avatar style={{ backgroundColor: '#1677ff' }}>K</Avatar>
    </Avatar.Group>
  );
}

export default CardDetailMemberList;

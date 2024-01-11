import { Tooltip } from 'antd';
import Logo from './Logo';

function UserDetail({ user, showDetail = true, hasTooltip = true, size = 32 }) {
  const avatar = user.avatar ? (
    user.avatar[0] === '#' ? { bgColor: user.avatar } : { bgSrc: user.avatar }) :
    {
      bgColor: '#000'
    };

  return (
    <Tooltip title={hasTooltip && user.name + ` (${user.username})`} placement="bottom" >
      <div className="flex min-w-0 leading-[2rem] cursor-pointer">
        <div className="flex items-center">
          {
            avatar && <Logo size={size} textColor="#f6f7f8" shape="circle" {...avatar}>
              <span className={`text-[${size / 20}rem] uppercase`}>
                {user?.name[0] + user?.name.split(' ').pop()[0]}
              </span>
            </Logo>
          }
          {showDetail && (
            <div className="ml-4 flex flex-col justify-between">
              <div className="text-[1.6rem] font-semibold">{user.name}</div>
              <div className="text-[1.4rem] text-[--color-subtext]">@{user.username}</div>
            </div>
          )}
        </div>
      </div>
    </Tooltip >
  );
}

export default UserDetail;

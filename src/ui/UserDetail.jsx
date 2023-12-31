import { Tooltip } from 'antd';
import Logo from './Logo';

function UserDetail({ user, showDetail = true, hasTooltip = true, size = 32 }) {
  const bg = user?.bg[0] === '#' ? { bgColor: user.bg } : { bgSrc: user.bg };
  return (
    <Tooltip title={hasTooltip && user.name + ` (${user.tag})`} placement="bottom">
      <div className="flex min-w-0 leading-[2rem]">
        <div className="flex items-center">
          <Logo size={size} textColor="#f6f7f8" shape="circle" {...bg}>
            <span className={`text-[${size / 20}rem] uppercase`}>{user.name[0] + user.name.split(' ').pop()[0]}</span>
          </Logo>
          {showDetail && (
            <div className="ml-4 flex flex-col justify-between">
              <div className="text-[1.6rem] font-semibold">{user.name}</div>
              <div className="text-[1.4rem] text-[--color-subtext]">@{user.tag}</div>
            </div>
          )}
        </div>
      </div>
    </Tooltip>
  );
}

export default UserDetail;

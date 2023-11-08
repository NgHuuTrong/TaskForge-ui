import Logo from './Logo';

function UserDetail({ user, showDetail = true, size = 32 }) {
  const bg = user.bg[0] === '#' ? { bgColor: user.bg } : { bgSrc: user.bg };
  return (
    <span className="flex min-w-0 p-[4px] pr-[8px] leading-[2rem]">
      <div className="flex items-center">
        <Logo size={size} textColor="#f6f7f8" shape="circle" {...bg}>
          <span className={`text-[${size / 20}rem] uppercase`}>{user.name[0] + user.name.split(' ').pop()[0]}</span>
        </Logo>
        {showDetail && (
          <div className="ml-4 flex flex-col justify-between">
            <div className="text-[1.6rem] font-bold text-[--color-grey-600]">{user.name}</div>
            <div className="text-[1.4rem] text-[--color-grey-500]">@{user.tag}</div>
          </div>
        )}
      </div>
    </span>
  );
}

export default UserDetail;

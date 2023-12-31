import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function ButtonImage({
  url,
  custom,
  title,
  to,
  subscription,
  hasStarred = true,
  type = 'url',
  height = '40px',
  onClick,
}) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="flex min-w-0 items-center justify-between rounded-xl bg-inherit p-[0.4rem] pr-[8px] hover:bg-[--color-grey-200]"
      style={{ width: '100%', height: height }}
    >
      <div className="flex items-center h-full w-full">
        {type === 'url' && (
          <div
            className={'mr-[8px] block h-full w-[40px] flex-[0_0_auto] rounded-[4px] bg-cover bg-center'}
            style={{ backgroundImage: `url(${url ? url : '/project.jpeg'})` }}
          />
        )}
        {type === 'custom' && custom}
        <div className="w-full flex flex-col justify-between overflow-hidden whitespace-nowrap text-ellipsis">
          <div className="text-[1.4rem] font-semibold">{title}</div>
          <div className="text-[1.2rem] text-[--color-subtext]">{subscription}</div>
        </div>
      </div>
      {hasStarred && (
        <div className="px-4">
          <div className="group ml-4 flex items-center justify-center">
            <AiFillStar size={16} color="#E2B204" className="absolute bottom-auto top-auto group-hover:opacity-0" />
            <AiOutlineStar size={16} color="#E2B204" className="absolute opacity-0 group-hover:opacity-100" />
          </div>
        </div>
      )}
    </Link>
  );
}

export default ButtonImage;

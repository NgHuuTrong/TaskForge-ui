import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function ButtonImage({ url, custom, title, to, subscription, hasStarred = true, type = 'url' }) {
  return (
    <Link
      to={to}
      className="flex h-[48px] min-w-0 items-center justify-between rounded-xl bg-[--color-grey-50] p-[4px] pr-[8px] hover:bg-[--color-grey-100]"
    >
      <div className="flex items-center">
        {type === 'url' && (
          <div
            className={
              'mr-[8px] block h-[32px] w-[40px] flex-[0_0_auto] rounded-[4px] bg-cover bg-center'
            }
            style={{ backgroundImage: `url(${url ? url : '/project.jpeg'})` }}
          />
        )}
        {type === 'custom' && custom}
        <div className="mr-4 flex flex-col justify-between">
          <div className="text-[1.4rem] font-semibold text-[--color-grey-600]">{title}</div>
          <div className="text-[1.2rem] text-[--color-grey-400]">{subscription}</div>
        </div>
      </div>
      {hasStarred && (
        <div className="px-4">
          <div className="group ml-4 flex items-center justify-center">
            <AiFillStar
              size={16}
              color="#E2B204"
              className="absolute bottom-auto top-auto group-hover:opacity-0"
            />
            <AiOutlineStar
              size={16}
              color="#E2B204"
              className="absolute opacity-0 group-hover:opacity-100"
            />
          </div>
        </div>
      )}
    </Link>
  );
}

export default ButtonImage;

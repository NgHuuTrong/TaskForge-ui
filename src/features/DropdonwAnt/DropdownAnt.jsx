<<<<<<< HEAD:src/components/DropdonwAnt/DropdownAnt.jsx
import DropdownWorkspaces from './DropdownWorkspaces';
import DropdownInfo from './DropdownInfo';
import DropdownStarred from './DropdownStarred';
import DropdownSample from './DropdownSample';
import DropdownRecently from './DropdownRecently';
import DropdownCreate from './DropdownCreate';

const DropdownAnt = ({ type, title, items }) => {
  
  const DropdownComponent =
    type === 'workspaces' ? (
      <DropdownWorkspaces items={items} title={title} />
    ) : type === 'info' ? (
      <DropdownInfo items={items} title={title} />
    ) : type === 'starred' ? (
      <DropdownStarred items={items} title={title} />
    ) : type === 'sample' ? (
      <DropdownSample items={items} title={title} />
    ) : type === 'recently' ? (
      <DropdownRecently items={items} title={title} />
    ) : type === 'create' ? (
      <DropdownCreate title={title} />
    ) : (
      <></>
    );

  return <>{DropdownComponent}</>;
};
=======
import { Dropdown, Space } from 'antd';

function DropdownAnt({ type, title, items }) {
  const header =
    'mr-1 flex h-11 rounded p-2 text-lg font-semibold text-[--color-text] hover:bg-[--color-grey-200]';
  const info =
    'h-12 w-12 ml-2 flex items-center justify-center rounded-full bg-[--color-dark] p-2 text-sm font-semibold text-white hover:bg-[--color-grey-300] hover:text-[--color-dark]';

  const menuProps = {
    items: items.map((item, id) => {
      return {
        key: item.id,
        label: (
          <a href="/" className='flex justify-center items-center'>
            <div className='flex-[1] object-contain'>
              <img src={item.img} alt="image_alt" />
            </div>
            <div className='flex-[3]'>
              <div>{item.title}</div>
              <div>{item.des}</div>
            </div>
          </a>
        ),
      };
    }),
  };

  return (
    <>
      <Dropdown menu={menuProps} trigger={['click']} arrow={true}>
        <button
          className={`${
            type === 'info' ? info : header
          } px-[1.5rem] py-[0.5rem] focus:bg-[--header-button-bg-hovered] focus:text-[--header-button-txt-hovered]`}
        >
          <span onClick={(e) => e.preventDefault()}>
            <Space size='small' className='flex items-center text-[1.2rem]'>
              {title}
              {type === 'header' && <i className="fa fa-angle-down"></i>}
            </Space>
          </span>
        </button>
      </Dropdown>
    </>
  );
}
>>>>>>> 2a212d4 (update Header, DropdownAnt, index.css):src/features/DropdonwAnt/DropdownAnt.jsx

export default DropdownAnt;

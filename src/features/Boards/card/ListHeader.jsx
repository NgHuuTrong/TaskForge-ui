import { MdOutlineMoreVert } from "react-icons/md";
import { Button, Dropdown } from 'antd';

function ListHeader({ id, items }) {
  return (
    <div className="mb-4 flex items-center justify-between">
      <p className="font-medium text-[--color-grey-700]">{id}</p>
      <Dropdown
        getPopupContainer={(trigger) => trigger.parentElement}
        dropdownRender={
          () => <div className="mt-4 w-[280px] rounded-xl bg-[--color-grey-0] p-4 border border-[--color-grey-300]">
            {items.map((item) => <div key={item.key}>
              {item.label}
            </div>)}
          </div>
        }
        trigger={['click']}
        placement="bottomLeft"
      >
        <Button className="flex items-center justify-center">
          <MdOutlineMoreVert className='text-[--color-grey-700]' />
        </Button>
      </Dropdown>
    </div>
  );
}

export default ListHeader;

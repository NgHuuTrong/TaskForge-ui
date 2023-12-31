import { MdOutlineMoreVert } from 'react-icons/md';
import { Button, Dropdown } from 'antd';
import { useUpdateList } from '../../../hooks/useList';
import { useState } from 'react';

function ListHeader({ list, items }) {
  const { isUpdating, updateList } = useUpdateList(list?.boardId);
  const [name, setName] = useState(list?.name);

  function updateListName() {
    if(name !== list.name) {
      updateList({
        listId: list.id,
        body: { name }
      });
    }
  }
  return (
    <div className="mb-4 flex items-center justify-between">
      <input
        className="font-medium text-[--color-grey-700] px-[1rem] bg-transparent"
        disabled={isUpdating}
        value={name}
        onChange={(e) => setName(e.target.value)}
        onBlur={() => updateListName()}
        onKeyUp={(e) => {
          if (e.key === 'Enter' || e.code === 13) {
            updateListName()
          }
        }}
      />
      <Dropdown
        getPopupContainer={(trigger) => trigger.parentElement}
        dropdownRender={() => (
          <div className="w-[20rem]">
            {items.map((item) => (
              <div key={item.key}>{item.label}</div>
            ))}
          </div>
        )}
        trigger={['click']}
        placement="bottomLeft"
      >
        <Button className="flex items-center justify-center">
          <MdOutlineMoreVert className="text-[--color-grey-700]" />
        </Button>
      </Dropdown>
    </div>
  );
}

export default ListHeader;

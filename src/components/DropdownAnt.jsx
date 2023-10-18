import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';

function DropdownAnt({ type, title, items }) {
  switch (type) {
    case 'info':
      return (
        <Dropdown
          menu={{
            items,
          }}
          trigger={'click'}
          className="ml-2 flex w-9 h-9 rounded-full p-2 text-sm font-semibold hover:bg-[--header-button-hovered] hover:text-[--header-button-color] justify-center items-center bg-[--color-dark] text-white"
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space size={'small'} className=''>
              {title}
            </Space>
          </a>
        </Dropdown>
      );
    case 'header':
      return (
        <Dropdown
          menu={{
            items,
          }}
          trigger={'click'}
          className="mr-1 flex h-11 rounded p-2 text-lg font-semibold hover:bg-[--header-button-hovered] hover:text-[--header-button-color] text-[--color-text]"
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space size={'small'}>
              {title}
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
      );
    default:
      return <></>;
  }
}

export default DropdownAnt;

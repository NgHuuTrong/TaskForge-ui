import { MoreOutlined } from '@ant-design/icons';
import { Button, Dropdown } from 'antd';

function CardHeader({ id, items }) {
  return (
    <div className="mb-4 flex items-center justify-between">
      <p className="font-medium">{id}</p>
      <Dropdown menu={{ items }} placement="bottomLeft">
        <Button className="flex items-center justify-center">
          <MoreOutlined />
        </Button>
      </Dropdown>
    </div>
  );
}

export default CardHeader;

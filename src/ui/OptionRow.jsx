import { Space } from 'antd';

function OptionRow({ option }) {
  return (
    <Space size={16}>
      <div>{option.icon}</div>
      <div>
        <p>{option.value}</p>
        <p className="text-[1.2rem]">{option.des}</p>
      </div>
    </Space>
  );
}

export default OptionRow;

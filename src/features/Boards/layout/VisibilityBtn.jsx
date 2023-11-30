import React from 'react';
import { Select } from 'antd';
import { AiOutlineLock } from 'react-icons/ai';
import { BsPeople } from 'react-icons/bs';

import OptionRow from '../../../ui/OptionRow';

const options = [
  {
    icon: <AiOutlineLock size={16} />,
    value: 'Private',
    des: 'Only board members can see and edit this board.',
  },
  {
    icon: <BsPeople size={16} />,
    value: 'Workspace',
    des: 'All members of this workspace can see and edit this board.',
  },
];
function VisibilityBtn({ visibility, setVisibility }) {
  return (
    <Select
      title="Change Visibility"
      trigger="click"
      onSelect={(value) => setVisibility(value)}
      defaultValue={visibility}
      optionLabelProp="value"
      dropdownStyle={{ width: '26rem' }}
      suffixIcon={null}
      options={[
        {
          value: options[0].value,
          label: <OptionRow option={options[0]} />,
        },
        {
          value: options[1].value,
          label: <OptionRow option={options[1]} />,
        },
      ]}
    />
  );
}

export default VisibilityBtn;

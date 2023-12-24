import React, { useState } from 'react';
import { Select } from 'antd';
import { AiOutlineLock } from 'react-icons/ai';
import { BsPeople } from 'react-icons/bs';

import OptionRow from '../../../ui/OptionRow';
import { useUpdateBoard } from '../../../hooks/useBoard';

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
function VisibilityBtn({ board }) {
  const { updateBoard, isUpdating } = useUpdateBoard();
  const [visibility, setVisibility] = useState(board.visibility ? 'Workspace' : 'Private');
  const handleChange = (value) => {
    updateBoard({ boardId: board.id, body: { visibility: value === 'Workspace' } });
    setVisibility(value);
  };
  return (
    <Select
      disabled={board.curMember.userId !== board.creatorId || isUpdating}
      title="Change Visibility"
      trigger="click"
      onChange={(value) => handleChange(value)}
      value={visibility}
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

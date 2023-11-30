import { useState } from 'react';
import { Select } from 'antd';
import { AiOutlineLock } from 'react-icons/ai';
import { BsPeople } from 'react-icons/bs';

import FormRow from '../../../ui/FormRow';
import workspaces from '../../../data/workspaces.json';
import OptionRow from '../../../ui/OptionRow';

function BoardDetail() {
  const [selectedWorkspace, setSelectedWorkspace] = useState(workspaces ? workspaces[0].workspaceName : '');
  return (
    <>
      <div className="mt-[8px]">
        <FormRow type="ver" label="Workspace">
          <Select
            defaultValue={workspaces && workspaces[0].workspaceName}
            onChange={(value) => setSelectedWorkspace(value)}
            options={
              workspaces &&
              workspaces.map((workspace) => {
                return { value: workspace.workspaceName };
              })
            }
          />
        </FormRow>
      </div>

      <div className="mt-[8px]">
        <FormRow type="ver" label="Visibility">
          <Select
            defaultValue="Private"
            getPopupContainer={(trigger) => trigger.parentElement}
            optionLabelProp="value"
            options={[
              {
                value: 'Private',
                label: (
                  <OptionRow
                    option={{
                      icon: <AiOutlineLock size={16} />,
                      value: 'Private',
                      des: 'Only board members can see and edit this board.',
                    }}
                  />
                ),
              },
              {
                value: 'Workspace',
                label: (
                  <OptionRow
                    option={{
                      icon: <BsPeople size={16} />,
                      value: 'Workspace',
                      des: `All members of ${selectedWorkspace} can see and edit this board.`,
                    }}
                  />
                ),
              },
            ]}
          />
        </FormRow>
      </div>
    </>
  );
}

export default BoardDetail;

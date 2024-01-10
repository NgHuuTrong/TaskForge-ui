import { Form, Select } from 'antd';
import { AiOutlineLock } from 'react-icons/ai';
import { BsPeople } from 'react-icons/bs';

import FormRow from '../../../ui/FormRow';
import OptionRow from '../../../ui/OptionRow';
import { useWorkspaces } from '../../../hooks/useWorkspace';
import Spinner from '../../../ui/Spinner';

function BoardDetail() {
  const { workspaces, isLoading } = useWorkspaces();
  if (isLoading) return <Spinner />;
  return (
    <>
      <div className="mt-[8px]">
        <FormRow label="Workspace" type="ver" note="This is the name of your company, group or organization.">
          <Form.Item name="workspaceId" rules={[{ required: true, message: 'This field is required!' }]}>
            <Select
              placeholder="Choose..."
              options={workspaces.map((workspace) => {
                return { value: workspace.id, label: workspace.name };
              })}
            />
          </Form.Item>
        </FormRow>
      </div>

      <div className="mt-[8px]">
        <FormRow label="Visibility" type="ver" note="This is the name of your company, group or organization.">
          <Form.Item name="type" rules={[{ required: true, message: 'This field is required!' }]}>
            <Select
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
                        des: `All members of workspace can see and edit this board.`,
                      }}
                    />
                  ),
                },
              ]}
            />
          </Form.Item>
        </FormRow>
      </div>
    </>
  );
}

export default BoardDetail;

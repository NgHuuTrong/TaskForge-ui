import { useState } from 'react';
import { Input, Select } from 'antd';

import Row from './Row';
import FormRow from './FormRow';
import Button from './Button';

const { TextArea } = Input;

function CreateWorkspace() {
  const [workspaceName, setWorkspaceName] = useState('');
  const [workspaceType, setWorkspaceType] = useState(null);
  return (
    <div className="flex items-stretch">
      <div className="flex items-center bg-[--color-grey-50] w-1/2 flex-col mt-[64px] mb-[16px]">
        <div className="w-[388px]">
          <div className="text-4xl font-bold">Let&apos;s build a Workspace</div>
          <span className="text-[1.5rem]">
            Increase your productivity by making it easy for everyone to access boards in one location.
          </span>
          <Row type="ver">
            <FormRow label="Workspace name" type="ver" note="This is the name of your company, group or organization.">
              <Input
                type="text"
                placeholder="Taco's company"
                value={workspaceName}
                className="w-[38.8rem] h-[4.8rem]"
                onChange={(e) => setWorkspaceName(e.target.value)}
              />
            </FormRow>
            <FormRow label="Workspace type" type="ver" note="This is the type of your company, group or organization.">
              <Select
                placeholder="Choose..."
                options={[
                  {
                    value: 'Small Business',
                    label: 'Small Business',
                  },
                  {
                    value: 'Engineering IT',
                    label: 'Engineering IT',
                  },
                ]}
                className="w-[38.8rem] h-[4.8rem]"
                onSelect={(e) => setWorkspaceType(e.target.value)}
                value={workspaceType || undefined}
              />
            </FormRow>
            <FormRow
              type="ver"
              label="Workspace description (Optional)"
              note="Put your members on a board with a short description of your Workspace."
            >
              <TextArea
                className="w-[38.8rem] h-[4.8rem]"
                cols="40"
                rows="3"
                placeholder="Our team organizes everything here"
              />
            </FormRow>
            <Button classNames="justify-center" disabled={workspaceName.length === 0}>
              Continue
            </Button>
          </Row>
        </div>
      </div>
      <div className="flex justify-center w-1/2 bg-[url('https://trello.com/assets/df0d81969c6394b61c0d.svg')]">
        <img src="https://trello.com/assets/d1f066971350650d3346.svg" alt="" width={342} height={256} />
      </div>
    </div>
  );
}

export default CreateWorkspace;

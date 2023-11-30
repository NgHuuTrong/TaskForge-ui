import { Input } from 'antd';
import { useState } from 'react';
import Logo from './Logo';
import Heading from './Heading';
import Button from './Button';
import { HiOutlinePencilSquare } from 'react-icons/hi2';
import { MdLockOutline, MdPublic } from 'react-icons/md';
import FormRow from './FormRow';

const { TextArea } = Input;

function EditWorkspace({ workspace }) {
  const [editWorkspace, setEditWorkspace] = useState(false);

  if (!editWorkspace) {
    return (
      <div className="flex items-center">
        <Logo size={60} bgImage="linear-gradient(#4bce97, #216e4e)">
          <span className="text-[3.5rem] font-bold">{workspace.workspaceName[0]}</span>
        </Logo>
        <div className="flex flex-col ml-[1rem] justify-between h-full leading-[2rem]">
          <Heading as="h3" classNames="leading-[2.4rem] font-medium gap-[0.4rem]">
            {workspace.workspaceName}
            <Button type="icon" size="small" onClick={() => setEditWorkspace(true)}>
              <HiOutlinePencilSquare size={16} />
            </Button>
          </Heading>
          <span className="text-[1.2rem] flex items-center gap-[0.2rem] pl-[0.2rem]">
            {workspace.isPrivate ? (
              <>
                <MdLockOutline size={16} />
                Private
              </>
            ) : (
              <>
                <MdPublic size={16} />
                Public
              </>
            )}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <FormRow label="Name" isCompulsory type="ver">
        <Input id="name" className="w-[28rem]" defaultValue={workspace.workspaceName} />
      </FormRow>
      <FormRow label="Short name" isCompulsory type="ver">
        <Input id="shortname" className="w-[28rem]" defaultValue={workspace.workspaceName} />
      </FormRow>
      <FormRow label="Website (optional)" type="ver">
        <Input id="website" className="w-[28rem]" autoComplete="website" />
      </FormRow>
      <FormRow label="Description (optional)" type="ver">
        <TextArea id="description" className="w-[28rem]" rows={2} />
      </FormRow>
      <div className="flex gap-4">
        <Button size="normal" onClick={() => setEditWorkspace(false)}>
          Save
        </Button>
        <Button type="icon" size="normal" onClick={() => setEditWorkspace(false)}>
          Cancel
        </Button>
      </div>
    </div>
  );
}

export default EditWorkspace;

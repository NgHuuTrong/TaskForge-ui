import { Form, Input } from 'antd';
import { useState } from 'react';
import Logo from './Logo';
import Heading from './Heading';
import Button from './Button';
import { HiOutlinePencilSquare } from 'react-icons/hi2';
import { MdPublic } from 'react-icons/md';
import FormRow from './FormRow';
import { useUpdateWorkspace } from '../hooks/useWorkspace';

const { TextArea } = Input;

function EditForm({ workspace, setEditWorkspace }) {
  const { isUpdating, updateWorkspace } = useUpdateWorkspace();
  const [form] = Form.useForm();
  const onFinish = (data) => {
    if (form.getFieldValue('name') !== workspace.name || form.getFieldValue('description') !== workspace.description)
      updateWorkspace(
        { body: data, workspaceId: workspace.id },
        {
          onSuccess: () => {
            setEditWorkspace(false);
          },
        },
      );
    else {
      setEditWorkspace(false);
    }
  };
  return (
    <Form
      className="flex flex-col"
      onFinish={onFinish}
      disabled={isUpdating}
      form={form}
      initialValues={{ name: workspace.name, description: workspace.description }}
    >
      <FormRow label="Name" isCompulsory type="ver">
        <Form.Item name="name" rules={[{ required: true, message: 'This field is required!' }]}>
          <Input className="w-[28rem]" />
        </Form.Item>
      </FormRow>
      <FormRow label="Description (optional)" type="ver">
        <Form.Item name="description">
          <TextArea rows={3} className="w-[28rem]" />
        </Form.Item>
      </FormRow>
      <div className="flex gap-4">
        <Button size="normal">Save</Button>
        <Button type="icon" size="normal" onClick={() => setEditWorkspace(false)}>
          Cancel
        </Button>
      </div>
    </Form>
  );
}

function EditWorkspace({ workspace }) {
  const [editWorkspace, setEditWorkspace] = useState(false);

  if (!editWorkspace) {
    return (
      <div className="flex items-center">
        <Logo size={56} bgImage="linear-gradient(#4bce97, #216e4e)">
          <span className="text-[2.8rem] font-bold">{workspace.name[0]}</span>
        </Logo>
        <div className="flex flex-col ml-[1rem] justify-between h-full leading-[2rem]">
          <Heading as="h3" classNames="leading-[2.4rem] font-medium gap-[0.4rem]">
            {workspace.name}
            <Button type="icon" size="small" onClick={() => setEditWorkspace(true)}>
              <HiOutlinePencilSquare size={16} />
            </Button>
          </Heading>
          <span className="text-[1.2rem] flex items-center gap-[0.2rem] pl-[0.2rem]">
            <MdPublic size={16} />
            Public
          </span>
        </div>
      </div>
    );
  }

  return <EditForm workspace={workspace} setEditWorkspace={setEditWorkspace} />;
}

export default EditWorkspace;

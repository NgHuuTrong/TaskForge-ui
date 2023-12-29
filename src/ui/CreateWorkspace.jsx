import { Input, Select } from 'antd';
// import { useForm } from 'react-hook-form';
import { Form } from 'antd';

import Row from './Row';
import FormRow from './FormRow';
import Button from './Button';
import { useCreateWorkspace } from '../hooks/useWorkspace';

const { TextArea } = Input;

function CreateWorkspace({ closeModal }) {
  const { isCreating, createWorkspace } = useCreateWorkspace();
  const [form] = Form.useForm();
  const onFinish = (data) => {
    createWorkspace(
      { ...data },
      {
        onSuccess: () => {
          form.resetFields();
          closeModal();
        },
      },
    );
  };
  return (
    <div className="flex items-stretch">
      <div className="flex items-center w-1/2 flex-col mt-[64px] mb-[16px]">
        <Form className="w-[388px]" onFinish={onFinish} form={form} disabled={isCreating}>
          <div className="text-4xl font-bold">Let&apos;s build a Workspace</div>
          <span className="text-[1.5rem]">
            Increase your productivity by making it easy for everyone to access boards in one location.
          </span>
          <Row type="ver">
            <FormRow label="Workspace name" type="ver" note="This is the name of your company, group or organization.">
              <Form.Item name="name" rules={[{ required: true, message: 'This field is required!' }]}>
                <Input placeholder="Taco's company" />
              </Form.Item>
            </FormRow>
            <FormRow label="Workspace type" type="ver" note="This is the type of your company, group or organization.">
              <Form.Item name="type" rules={[{ required: true, message: 'This field is required!' }]}>
                <Select
                  placeholder="Choose..."
                  options={[
                    {
                      value: 'Small Business',
                    },
                    {
                      value: 'Engineering IT',
                    },
                  ]}
                />
              </Form.Item>
            </FormRow>
            <FormRow
              type="ver"
              label="Workspace description (Optional)"
              note="Put your members on a board with a short description of your Workspace."
            >
              <Form.Item name="description">
                <TextArea rows="3" placeholder="Our team organizes everything here" />
              </Form.Item>
            </FormRow>
            <Button classNames="justify-center">Create</Button>
          </Row>
        </Form>
      </div>
      <div className="flex justify-center w-1/2 bg-[url('https://trello.com/assets/df0d81969c6394b61c0d.svg')]">
        <img src="https://trello.com/assets/d1f066971350650d3346.svg" alt="" width={342} height={256} />
      </div>
    </div>
  );
}

export default CreateWorkspace;

import { Form, Input } from 'antd';
import FormRow from '../../ui/FormRow';
import Button from '../../ui/Button';
import { useUpdatePassword } from '../Authenticate/useUpdateUser';

function Security() {
  const { isUpdating, updatePassword } = useUpdatePassword();
  const [form] = Form.useForm();
  const onFinish = (data) => {
    updatePassword(
      { ...data },
      {
        onSuccess: () => {
          form.resetFields();
        },
      },
    );
  };
  return (
    <div className="flex flex-col items-center my-[50px] ">
      <img src="https://trello.com/assets/eff3d701a9c3a71105ea.svg" alt="" />

      <Form className="w-full max-w-[53rem]" disabled={isUpdating} onFinish={onFinish} form={form}>
        <h3 className="text-[20px] font-medium leading-[26px] mt-[40px]">Change your password</h3>
        <hr className="border-[1px] my-[10px]" />

        <FormRow label="Current Password" type="ver">
          <Form.Item name="currentPassword" rules={[{ required: true, message: 'This field is required!' }]}>
            <Input.Password className="px-[1.2rem] py-[0.8rem]" />
          </Form.Item>
        </FormRow>

        <FormRow label="New Password" type="ver">
          <Form.Item name="newPassword" rules={[{ required: true, message: 'This field is required!' }]}>
            <Input.Password className="px-[1.2rem] py-[0.8rem]" />
          </Form.Item>
        </FormRow>

        <FormRow label="Confirm your Password" type="ver">
          <Form.Item name="newPasswordConfirm" rules={[{ required: true, message: 'This field is required!' }]}>
            <Input.Password className="px-[1.2rem] py-[0.8rem]" />
          </Form.Item>
        </FormRow>
        <Button classNames="justify-center">Change</Button>
      </Form>
    </div>
  );
}

export default Security;

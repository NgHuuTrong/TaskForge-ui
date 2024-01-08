import { Input, Form } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import FormRow from '../ui/FormRow';
import Button from '../ui/Button';
import FormTitle from '../features/Authenticate/FormTitle';
import { useResetPassword } from '../features/Authenticate/useLogin';

function ResetPassword() {
  const navigate = useNavigate();
  const { token } = useParams();

  const { isReseting, resetPass } = useResetPassword();

  const [form] = Form.useForm();
  const onFinish = (data) => {
    console.log(data);
    resetPass(
      { ...data, token },
      {
        onSuccess: () => {
          form.resetFields();
        },
      },
    );
  };
  return (
    <div className="shadow-4xl flex h-screen w-screen items-center justify-center overflow-hidden bg-[--color-grey-50]">
      <div className="relative flex flex-col bg-[--color-grey-0] min-w-[45rem] p-12 items-center">
        <FormTitle title="Reset your password"></FormTitle>
        <Form className="flex flex-col w-full" onFinish={onFinish} form={form} disabled={isReseting}>
          <FormRow type="ver" label="New Password">
            <Form.Item name="password" rules={[{ required: true, message: 'This field is required!' }]}>
              <Input.Password className="px-[1.2rem] py-[0.8rem]" />
            </Form.Item>
          </FormRow>
          <FormRow type="ver" label="Confirm New Password">
            <Form.Item name="passwordConfirm" rules={[{ required: true, message: 'This field is required!' }]}>
              <Input.Password className="px-[1.2rem] py-[0.8rem]" />
            </Form.Item>
          </FormRow>
          <Button classNames="justify-center">Reset password</Button>
          <Button classNames="justify-center" type="icon" onClick={() => navigate('/authenticate')}>
            Back to sign in
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default ResetPassword;

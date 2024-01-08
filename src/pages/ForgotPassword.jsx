import { Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import FormTitle from '../features/Authenticate/FormTitle';
import Button from '../ui/Button';
import FormRow from '../ui/FormRow';
import { useForgotPassword } from '../hooks/useAuthenticate';

function ForgotPassword() {
  const navigate = useNavigate();
  const { isSending, sendReset } = useForgotPassword();

  const [form] = Form.useForm();
  const onFinish = (data) => {
    console.log(data);
    sendReset(
      { ...data },
      {
        onSuccess: () => {
          form.resetFields();
        },
      },
    );
  };
  return (
    <div className="shadow-4xl flex h-screen w-screen items-center justify-center overflow-hidden bg-[--color-grey-50]">
      <div className="relative flex flex-col bg-[--color-grey-0] min-w-[40rem] p-12 items-center">
        <FormTitle title="Forgot Your Password?" />
        <Form className="flex flex-col gap-4 w-full" onFinish={onFinish} form={form} disabled={isSending}>
          <FormRow type="ver" label="Email">
            <Form.Item name="email" rules={[{ required: true, message: 'This field is required!' }]}>
              <Input placeholder="Enter your email" />
            </Form.Item>
          </FormRow>
          <Button classNames="justify-center">Send verification</Button>
          <Button classNames="justify-center" type="icon" onClick={() => navigate('/authenticate')}>
            Back to sign in
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default ForgotPassword;

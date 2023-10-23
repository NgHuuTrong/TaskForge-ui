import { Button, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import { MailOutlined } from '@ant-design/icons';
import FormTitle from '../features/Authenticate/FormTitle';

function ForgotPassword() {
  const navigate = useNavigate();
  return (
    <div className="shadow-4xl flex h-screen w-screen items-center justify-center overflow-hidden">
      <div className="relative flex flex-col bg-white px-16 pb-20 pt-12 shadow-2xl">
        <FormTitle title="Forgot Your Password?"></FormTitle>
        <form>
          <Input
            size="default"
            placeholder="Enter your email"
            prefix={<MailOutlined />}
            className="mb-8 h-20 w-full"
          ></Input>
          <Button
            className="flex h-16 w-full items-center justify-center bg-black text-start font-normal"
            type="primary"
          >
            Reset password
          </Button>
          <div className="mt-2 flex w-full justify-center">
            <Button
              className="border-none text-xl text-zinc-400"
              onClick={() => navigate('/authenticate')}
            >
              Back to sign in
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;

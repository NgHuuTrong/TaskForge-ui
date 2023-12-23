import { Button, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import { MailOutlined } from '@ant-design/icons';
import FormTitle from '../features/Authenticate/FormTitle';

function ForgotPassword() {
  const navigate = useNavigate();
  return (
    <div className="shadow-4xl flex h-screen w-screen items-center justify-center overflow-hidden">
      <div className="relative flex flex-col bg-white px-10 md:px-16 pb-20 pt-12 shadow-2xl">
        <FormTitle title="Forgot Your Password?"></FormTitle>
        <form>
          <Input
            size="large"
            placeholder="Enter your email"
            prefix={<MailOutlined />}
            className="mb-8 text-[1.1rem] sm:text-[1.3rem] md:text-[1.5rem] w-full"
          ></Input>
          <Button
            className="flex w-full items-center justify-center bg-black text-start font-normal"
            type="primary"
          >
            Reset password
          </Button>
          <div className="mt-2 flex w-full justify-center">
            <Button
              className="border-none text-lg md:text-xl text-zinc-400"
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

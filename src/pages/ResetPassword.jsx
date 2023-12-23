import { Button, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import { LockOutlined } from '@ant-design/icons';
import FormTitle from '../features/Authenticate/FormTitle';

function ResetPassword() {
  const navigate = useNavigate();
  return (
    <div className="shadow-4xl flex h-screen items-center justify-center overflow-hidden">
      <div className="flex flex-col bg-white px-10 md:px-16 pb-20 pt-8 shadow-2xl">
        <FormTitle title="Reset your password"></FormTitle>
        <form className="flex flex-col">
          <Input
            size="middle"
            type='password'
            placeholder="Current password"
            prefix={<LockOutlined />}
            className="mb-8 text-[1.1rem] sm:text-[1.3rem] md:text-[1.5rem]"
          ></Input>
          <Input
            size="middle"
            type='password'
            placeholder="New password"
            prefix={<LockOutlined />}
            className="mb-8 text-[1.1rem] sm:text-[1.3rem] md:text-[1.5rem]"
          ></Input>
          <Input
            size="middle"
            type='password'
            placeholder="Confirm new password"
            prefix={<LockOutlined />}
            className="mb-8 text-[1.1rem] sm:text-[1.3rem] md:text-[1.5rem]"
          ></Input>
          <Button
            className="flex h-16 w-full items-center justify-center bg-black text-start font-normal"
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

export default ResetPassword;

import Logo from '../assets/logo_black.png';
import { Button, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import { LockOutlined } from '@ant-design/icons';

function ResetPassword() {
  const navigate = useNavigate();
  return (
    <div className="shadow-4xl flex h-screen w-screen items-center justify-center overflow-hidden">
      <div className="relative flex flex-col bg-white px-16 pb-20 pt-8 shadow-2xl">
        <button
          onClick={() => navigate('/example')}
          className="absolute -top-[50px] left-1/2 -translate-x-[75px]"
        >
          <img src={Logo} className="flex w-60" alt='logo' />
        </button>
        <p className="mb-20 mt-12 flex justify-center text-4xl font-bold text-black">
          <p>Reset your password</p>
        </p>
        <form className="flex flex-col">
          <Input
            size="default"
            placeholder="Current password"
            prefix={<LockOutlined></LockOutlined>}
            className="mb-8 h-20 w-[300px]"
          ></Input>
          <Input
            size="default"
            placeholder="Current password"
            prefix={<LockOutlined></LockOutlined>}
            className="mb-8 h-20 w-full"
          ></Input>
          <Input
            size="default"
            placeholder="Current password"
            prefix={<LockOutlined></LockOutlined>}
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
              className="text-xl text-zinc-400 border-none"
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

import { useForm } from 'react-hook-form';
import Image from '../assets/forgot.png';
import Logo from '../assets/logo_black.png';
import { Button, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import { MailOutlined } from '@ant-design/icons';
function ForgotPassword() {
  const navigate = useNavigate();
  return (
    <div className="shadow-4xl flex h-screen w-screen items-center justify-center overflow-hidden">
      <div className="relative flex flex-col bg-white px-16 pb-20 pt-12 shadow-2xl">
        <button
          onClick={() => navigate('/example')}
          className="absolute -top-[50px] left-1/2 -translate-x-[75px]"
        >
          <img src={Logo} className="flex w-60"></img>
        </button>
        <p className="mb-20 mt-16 text-4xl font-bold text-black">
          <p>Forgot Your Password?</p>
        </p>
        <form>
          <Input
            size="default"
            placeholder="Enter your email"
            prefix={<MailOutlined></MailOutlined>}
            className="mb-8 h-20 w-full"
          ></Input>
          <Button
            className="flex h-16 w-full items-center justify-center bg-black text-start font-normal"
            type="primary"
          >
            Reset password
          </Button>
          <div className="mt-2 flex w-full justify-center">
            <button
              className="text-xl text-zinc-400"
              onClick={() => navigate('/authenticate')}
            >
              Back to sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;

import { LockOutlined, UserAddOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import Button from '../../ui/Button';
import { SocialIcons } from './SocialIcons';
import Logo from '../../assets/logo_red.png';
import { Link, useNavigate } from 'react-router-dom';

function SignInForm({ setIsSignIn, isSignIn }) {
  const navigate = useNavigate();
  return (
    <form
      className="absolute left-0 top-0 z-20 h-full w-full bg-white md:w-1/2"
      style={{
        transition: 'all 0.6s ease-in-out',
        transform: isSignIn ? '' : 'translateX(100%)',
      }}
    >
      <div className="flex h-full flex-col px-20 py-20 text-center">
        <div className="flex w-full flex-col justify-start">
          <img src={Logo} className="w-40" alt="logo" />
          <p className="mb-28 mt-8 text-start text-4xl font-semibold">Welcome back👋</p>
        </div>
        <div className='space-y-4'>
          <Input
            size="default"
            type='password'
            placeholder="Username"
            prefix={<UserAddOutlined />}
            className="text-[1.1rem] sm:text-[1.3rem] md:text-[1.5rem]"
          />
          <Input
            size="default"
            type='password'
            placeholder="Password"
            prefix={<LockOutlined />}
            className="text-[1.1rem] sm:text-[1.3rem] md:text-[1.5rem] mb-2"
          />
        </div>
        <Link to="/forgot-password" className="mb-8 text-end text-base text-[--color-brand-600]">
          Forgot password?
        </Link>
        <Button
          classNames="rounded-none bg-[linear-gradient(225deg,_rgba(84,213,219,1)_45%,_rgba(73,148,229,1)_97%)] flex justify-center items-center"
          onClick={() => navigate('/example')}
        >
          Sign in
        </Button>
        <SocialIcons />
        <span className="mt-12 text-center text-base text-zinc-500">
          {'Do you have an account? '}
          <button type="button" style={{ color: '#4994e5' }} onClick={() => setIsSignIn((prev) => !prev)}>
            {' '}
            Create an account
          </button>
        </span>
      </div>
    </form>
  );
}

export default SignInForm;

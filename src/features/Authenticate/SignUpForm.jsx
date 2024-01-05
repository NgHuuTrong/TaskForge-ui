import { Input } from 'antd';
import Button from '../../ui/Button';
import { SocialIcons } from './SocialIcons';
import Logo from '../../assets/logo_blue.png';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

function SignUpForm({ setIsSignIn, isSignIn }) {
  const navigate = useNavigate();

  return (
    <div
      className="absolute left-0 top-0 h-full w-1/2 bg-[--color-grey-50]"
      style={{
        transition: 'all 0.6s ease-in-out',
        transform: isSignIn ? '' : 'translateX(100%)',
        opacity: isSignIn ? '0' : 1,
        zIndex: isSignIn ? 1 : 40,
      }}
    >
      <form className="absolute left-0 top-0 z-20 h-full w-full">
        <div className="flex h-full flex-col px-20 py-20 text-center">
          <div className="flex w-full flex-col justify-start">
            <img src={Logo} alt='logo' className="w-40"></img>
            <p className="my-8 text-start text-4xl font-semibold">
              Hey, hello👋
            </p>
          </div>

          <Input size="default" placeholder="Username" prefix={<UserOutlined />} className="mb-8" />
          <Input size="Password" placeholder="large size" prefix={<LockOutlined />} className="mb-8" />
          <Input size="default" placeholder="First Name" className="mb-8" />
          <Input size="default" placeholder="Last Name" className="mb-8" />
          <Button
            classNames="rounded-none bg-[linear-gradient(225deg,_rgba(84,213,219,1)_45%,_rgba(73,148,229,1)_97%)] flex justify-center items-center h-16"
            onClick={() => navigate('/example')}
          >
            Sign up
          </Button>
          <SocialIcons></SocialIcons>
          <span className="mb-12 text-center text-base text-zinc-500">
            {'Do you have an account? '}
            <button type="button" style={{ color: '#4994e5' }} onClick={() => setIsSignIn((prev) => !prev)}>
              {' '}
              Sign in
            </button>
          </span>
        </div>
      </form>
    </div>
  );
}

export default SignUpForm;

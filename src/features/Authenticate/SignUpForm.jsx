import { Input } from 'antd';
import Button from '../../ui/Button';
import { SocialIcons } from './SocialIcons';
import Logo from '../../assets/logo_red.png';
import { useNavigate } from 'react-router-dom';
import { CiUser } from "react-icons/ci";
import { MdLockOutline, MdDriveFileRenameOutline } from "react-icons/md";

function SignUpForm({ setIsSignIn, isSignIn }) {
  const navigate = useNavigate();
  return (
    <div
      className={`absolute left-0 top-0 h-full w-full bg-white md:w-1/2 ${isSignIn ? '' : 'md:translate-x-full'}`}
      style={{
        transition: 'all 0.6s ease-in-out',
        opacity: isSignIn ? '0' : 1,
        zIndex: isSignIn ? 1 : 40,
      }}
    >
      <form className="absolute left-0 top-0 z-20 h-full w-full bg-white">
        <div className="flex h-full flex-col px-20 py-16 text-center">
          <div className="flex w-full flex-col justify-start">
            <img src={Logo} alt='logo' className="w-40" />
            <p className="my-8 text-start text-4xl font-semibold">Hey, hello👋</p>
          </div>
          <div className='space-y-3'>
            <Input
              size="large"
              placeholder="Username"
              prefix={<CiUser />}
              className="text-[1.1rem] sm:text-[1.3rem] md:text-[1.5rem]"
            />
            <Input
              size="large"
              type='password'
              placeholder="Password"
              prefix={<MdLockOutline />}
              className="text-[1.1rem] sm:text-[1.3rem] md:text-[1.5rem]"
            />
            <Input
              size="large"
              type='password'
              placeholder="Confirm password"
              prefix={<MdLockOutline />}
              className="text-[1.1rem] sm:text-[1.3rem] md:text-[1.5rem]"
            />
            <Input
              size="large"
              placeholder="First Name"
              prefix={<MdDriveFileRenameOutline />}
              className="text-[1.1rem] sm:text-[1.3rem] md:text-[1.5rem]"
            />
            <Input
              size="large"
              placeholder="Last Name"
              prefix={<MdDriveFileRenameOutline />}
              className="text-[1.1rem] sm:text-[1.3rem] md:text-[1.5rem]"
            />
          </div>
          <Button
            classNames="mt-5 rounded-none bg-[linear-gradient(225deg,_rgba(84,213,219,1)_45%,_rgba(73,148,229,1)_97%)] flex justify-center items-center"
            onClick={() => navigate('/example')}
          >
            Sign up
          </Button>
          <SocialIcons />
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

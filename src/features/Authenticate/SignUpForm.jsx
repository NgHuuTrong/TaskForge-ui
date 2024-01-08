import { Form, Input } from 'antd';
import Button from '../../ui/Button';
import { SocialIcons } from './SocialIcons';
import Logo from '../../assets/logo_blue.png';
import { useSignup } from './useLogin';

function SignUpForm({ setIsSignIn, isSignIn }) {
  const { isLoading, signup } = useSignup();

  const [form] = Form.useForm();
  const onFinish = (data) => {
    signup(
      { ...data },
      {
        onSuccess: () => {
          form.resetFields();
        },
      },
    );
  };
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
      <Form className="absolute left-0 top-0 z-20 h-full w-full" onFinish={onFinish} form={form} disabled={isLoading}>
        <div className="flex h-full flex-col px-20 py-20 text-center overflow-y-scroll">
          <div className="flex w-full flex-col justify-start">
            <img src={Logo} alt='logo' className="w-40"></img>
            <p className="my-8 text-start text-4xl font-semibold">
              Hey, hello👋
            </p>
          </div>

          <Form.Item name="email" rules={[{ required: true, message: 'This field is required!' }]}>
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item name="name" rules={[{ required: true, message: 'This field is required!' }]}>
            <Input placeholder="Full name" />
          </Form.Item>
          <Form.Item name="username" rules={[{ required: true, message: 'This field is required!' }]}>
            <Input placeholder="Username" />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: 'This field is required!' }]}>
            <Input.Password
              placeholder="Password"
              className="px-[1.2rem] py-[0.8rem] focus-within:border-[2px] focus-within:border-[var(--color-border-focus)]"
            />
          </Form.Item>
          <Form.Item name="passwordConfirm" rules={[{ required: true, message: 'This field is required!' }]}>
            <Input.Password
              placeholder="Confirm Password"
              className="px-[1.2rem] py-[0.8rem] focus-within:border-[2px] focus-within:border-[var(--color-border-focus)]"
            />
          </Form.Item>
          <Button classNames="rounded-none bg-[linear-gradient(225deg,_rgba(84,213,219,1)_45%,_rgba(73,148,229,1)_97%)] flex justify-center items-center h-16">
            Sign up
          </Button>
          <SocialIcons></SocialIcons>
          <span className="text-center text-base text-zinc-500">
            {'Do you have an account? '}
            <button type="button" style={{ color: '#4994e5' }} onClick={() => setIsSignIn((prev) => !prev)}>
              {' '}
              Sign in
            </button>
          </span>
        </div>
      </Form>
    </div>
  );
}

export default SignUpForm;

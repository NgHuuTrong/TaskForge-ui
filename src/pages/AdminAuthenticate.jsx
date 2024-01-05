import { useState } from "react";
import { useLogin } from "../features/Authenticate/useLogin";
import { Button, Input } from "antd";
import { LockOutlined, UserAddOutlined } from '@ant-design/icons';
import Logo from '../assets/logo_blue.png';
function AdminAuthenticate() {
  const [data, setData] = useState({});
  const { login, isLoading } = useLogin();

//   const navigate = useNavigate();

//   // 1. Load the authenticated user
//   const { isLoading: loadAuth, isAuthenticated } = useUser();
//   // navigate(0);
//   // 2. If there is NO authenticated user, redirect to the /login
//   useEffect(
//     function () {
//       if (isAuthenticated && !loadAuth) navigate('/boards', { replace: true });
//     },
//     [isAuthenticated, loadAuth, navigate],
//   );

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (!data.email || !data.password) return;
    login(data, {
      onSuccess: () => {
        setData({});
      },
    });
  }

  return (
    <div className="w-screen h-screen bg-[--color-grey-50] items-center justify-center flex">
        <form
        onSubmit={handleSubmit}
        className="w-[400px] bg-[--color-grey-50] mb-[100px] border-[--color-grey-900] border-[0.01px] pb-12 rounded-lg"
        style={{
            transition: 'all 0.6s ease-in-out',
        }}
        >
        <div className="flex h-full flex-col px-20 py-20 text-center">
            <div className="flex w-full flex-col justify-start">
            <img src={Logo} className="w-40" alt="logo" />
            <p className="mb-28 mt-8 text-start text-4xl font-semibold">Welcome back, admin👋</p>
            </div>

            <Input
            name="email"
            disabled={isLoading}
            size="large size"
            placeholder="Email"
            onChange={handleChange}
              prefix={<UserAddOutlined />}
            className="mb-8"
            />
            <Input
            name="password"
            type="password"
            disabled={isLoading}
            size="large size"
            placeholder="Password"
            onChange={handleChange}
              prefix={<LockOutlined />}
            className="mb-4"
            />
            <Button
            classNames="rounded-none bg-[linear-gradient(225deg,_rgba(84,213,219,1)_45%,_rgba(73,148,229,1)_97%)] flex justify-center items-center h-16"
            onClick={handleSubmit}
            >
            Sign in
            </Button>
        
        </div>
        </form>
    </div>
  );
}

export default AdminAuthenticate;
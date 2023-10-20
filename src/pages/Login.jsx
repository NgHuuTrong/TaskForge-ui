import {
  FacebookFilled,
  FacebookOutlined,
  GoogleCircleFilled,
  GoogleOutlined,
  LinkedinFilled,
  LinkedinOutlined,
} from '@ant-design/icons';
import React from 'react';
// import './css/login.css';
import { useEffect } from 'react';
import { useState } from 'react';
import Logo from '../assets/logo_red.png';
import Background from '../assets/gradient_background.gif';
export const Login = () => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [logginError, setLogginError] = useState('');
  //   const history = useNavigate();
  useEffect(() => {
    document.body.classList.add('center-div');
    return () => {
      document.body.classList.remove('center-div');
    };
  }, []);
  const [isSignIn, setIsSignIn] = useState(true);
  const handleSignUp = (e) => {};
  const signIn = (userName, password) => {};
  const handleSignIn = (e) => {
    setIsSignIn((prev) => !prev);
  };
  console.log(isSignIn);
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div
        className="relative flex overflow-hidden"
        style={{
          width: '768px',
          minHeight: '480px',
          backgroundImage: '../assets/gradient_background.gif',
        }}
        id="login-container"
      >
        <SignUpForm
          handleSignUp={handleSignUp}
          isSignIn={isSignIn}
        ></SignUpForm>
        <SignInForm
          isSignIn={isSignIn}
          handleSignIn={handleSignIn}
        ></SignInForm>
        <SignInFormOverlay
          isSignIn={isSignIn}
          setIsSignIn={setIsSignIn}
        ></SignInFormOverlay>
      </div>
    </div>
  );
};

const SocialIcons = () => {
  return (
    <div className="my-8">
      <a
        href="#"
        className="mx-2 inline-flex items-center justify-center rounded-full border-zinc-500"
        style={{ width: '40px', height: '40px', borderWidth: '1px' }}
      >
        <FacebookFilled />
      </a>
      <a
        href="#"
        className="mx-2 inline-flex items-center justify-center rounded-full border-zinc-500"
        style={{ width: '40px', height: '40px', borderWidth: '1px' }}
      >
        <GoogleCircleFilled></GoogleCircleFilled>
      </a>
      <a
        href="#"
        className="mx-2 inline-flex items-center justify-center rounded-full border-zinc-500"
        style={{ width: '40px', height: '40px', borderWidth: '1px' }}
      >
        <LinkedinFilled></LinkedinFilled>
      </a>
    </div>
  );
};

const SignUpForm = ({ handleSignUp, isSignIn }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [newUserName, setNewUserName] = useState('');
  const [newPassword, setNewPassword] = useState('');
  return (
    <div
      className="absolute left-0 top-0 h-full w-1/2 bg-white"
      style={{
        transition: 'all 0.6s ease-in-out',
        transform: isSignIn ? '' : 'translateX(100%)',
        opacity: isSignIn ? '0' : 1,
        zIndex: isSignIn ? 1 : 40,
      }}
    >
      <form
        className="z-50 flex h-full flex-col items-center px-12 text-center"
        onSubmit={handleSignUp}
      >
        <h1 className="m-0 font-bold">Create Account</h1>
        <SocialIcons></SocialIcons>
        <input
          className="login-input"
          type="text"
          placeholder="FirstName"
          value={firstName}
          onChange={(e) => {
            // setFirstName(e.target.value);
          }}
          required
        />
        <input
          className="login-input"
          type="text"
          placeholder="LastName"
          value={lastName}
          onChange={(e) => {
            //   setLastName(e.target.value);
          }}
          required
        />
        <input
          className="login-input"
          type="text"
          placeholder="UserName"
          value={newUserName}
          onChange={(e) => {
            // setNewUserName(e.target.value);
          }}
          required
        />
        <input
          className="login-input"
          type="password"
          placeholder="Password"
          value={newPassword}
          onChange={(e) => {
            //   setNewPassword(e.target.value);
          }}
          required
        />
        <button className="login-button" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};

const SignInForm = ({ handleSignIn, isSignIn }) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  return (
    <form
      onSubmit={handleSignIn}
      className="absolute left-0 top-0 z-20 h-full w-1/2 bg-blue-100"
      style={{
        transition: 'all 0.6s ease-in-out',
        transform: isSignIn ? '' : 'translateX(100%)',
      }}
    >
      <div className="flex h-full flex-col px-20 py-32 text-center">
        <div className="flex w-full flex-col justify-start">
          <img src={Logo} className="w-40"></img>
          <p className="mt-8 text-start text-4xl font-semibold">Hey, hello👋</p>
        </div>

        <input
          className="login-input"
          type="text"
          placeholder="Username"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <input
          className="login-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <a href="#" className="login-a">
          Forgot your password?
        </a>
        <button
          className="login-button"
          type="submit"
          onClick={(e) => {
            handleSignIn(e);
          }}
        >
          Sign In
        </button>
        <SocialIcons></SocialIcons>
      </div>
    </form>
  );
};

const SignInFormOverlay = ({ isSignIn, setIsSignIn }) => {
  return (
    <div
      className="absolute right-0 top-0 z-40 h-full overflow-hidden"
      style={{
        transition: 'transform 0.6s ease-in-out',
        width: '50%',
        transform: isSignIn ? '' : 'translateX(-100%)',
      }}
    >
      <div
        className="relative h-full"
        style={{
          backgroundImage:
            'url(https://i.pinimg.com/originals/4a/ae/bf/4aaebf41f6b1f0a10991689cf0e90a19.gif)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: '0 0',
          transform: isSignIn ? '' : 'translate(50%)',
          width: '768px',
          transition: 'transform 0.6s ease-in-out',
          left: '-100%',
        }}
      >
        <div
          className="absolute top-0 flex h-full w-1/2 flex-col items-center justify-center text-center"
          style={{
            transition: 'transform ease-in-out 0.6s',
            transform: isSignIn ? 'translateX(-20%)' : 'translateX(0)',
          }}
        >
          <div className="bg-white">
            <h1 className="login-h1">Welcome Back!</h1>
            <p className="login-p">
              To keep connected with us please login with your personal info
            </p>
            <button
              className="login-button ghost"
              id="signIn"
              onClick={() => {
                setIsSignIn(true);
              }}
            >
              Sign In
            </button>
          </div>
        </div>
        <div
          className="absolute right-0 top-0 flex h-full w-1/2 flex-col items-center justify-center px-12 text-center"
          style={{
            transition: 'transform ease-in-out 0.6s',
            transform: isSignIn ? 'translateX(0)' : 'translateX(20%)',
          }}
        >
          <div style={{ backgroundColor: 'rgba(255,255,255, 0.5)' }}>
            <h1 className="login-h1">Hello, Friend!</h1>
            <p className="login-p">
              Enter your personal details and start journey with us
            </p>
            <button
              className="login-button ghost"
              id="signUp"
              onClick={() => {
                setIsSignIn((prev) => !prev);
              }}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

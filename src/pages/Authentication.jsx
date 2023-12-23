import React from 'react';
import { useState } from 'react';
import AuthenticateFormOverLay from '../features/Authenticate/AuthenticateFormOverlay';
import SignInForm from '../features/Authenticate/SignInForm';
import SignUpForm from '../features/Authenticate/SignUpForm';

function Authenticate() {
  const [isSignIn, setIsSignIn] = useState(true);
  return (
    <div className="flex h-screen w-full items-center justify-center " style={{ backgroundColor: '#4994e5' }}>
      <div
        className="relative flex overflow-hidden bg-white w-[384px] md:w-[768px]"
        style={{
          minHeight: '520px',
          backgroundImage: '../assets/gradient_background.gif',
        }}
        id="login-container"
      >
        <SignUpForm setIsSignIn={setIsSignIn} isSignIn={isSignIn} />
        <SignInForm isSignIn={isSignIn} setIsSignIn={setIsSignIn} />
        <AuthenticateFormOverLay isSignIn={isSignIn} setIsSignIn={setIsSignIn} />
      </div>
    </div>
  );
}

export default Authenticate;

import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { AuthenticateFormOverLay } from '../features/Authenticate/AuthenticateFormOverlay';
import { SignInForm } from '../features/Authenticate/SignInForm';
import { SignUpForm } from '../features/Authenticate/SignUpForm';
export const Authenticate = ({}) => {
  const [isSignIn, setIsSignIn] = useState(true);
  return (
    <div
      className="flex h-screen w-full items-center justify-center "
      style={{ backgroundColor: '#4994e5' }}
    >
      <div
        className="relative flex overflow-hidden bg-white"
        style={{
          width: '768px',
          minHeight: '520px',
          backgroundImage: '../assets/gradient_background.gif',
        }}
        id="login-container"
      >
        <SignUpForm setIsSignIn={setIsSignIn} isSignIn={isSignIn}></SignUpForm>
        <SignInForm isSignIn={isSignIn} setIsSignIn={setIsSignIn}></SignInForm>
        <AuthenticateFormOverLay
          isSignIn={isSignIn}
          setIsSignIn={setIsSignIn}
        ></AuthenticateFormOverLay>
      </div>
    </div>
  );
};

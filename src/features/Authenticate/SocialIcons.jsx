import { FacebookFilled, GoogleCircleFilled, LinkedinFilled } from '@ant-design/icons';
import { useLoginByGoogle } from './useLogin';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

export const SocialIcons = () => {
  const { isLoading, googleLogin } = useLoginByGoogle();

  const login = useGoogleLogin({
    onSuccess: async (codeResponse) => {
      const userInfo = await axios
        .get('https://www.googleapis.com/oauth2/v3/userinfo',
          {
            headers: { Authorization: `Bearer ${codeResponse.access_token}` },
          })
      const result = userInfo.data;

      googleLogin({
        name: result.name,
        givenName: result.given_name,
        familyName: result.family_name,
        avatar: result.picture,
        email: result.email
      })
    },
  });

  return (
    <div className="my-4 mb-8">
      <div className="relative my-4 text-center">
        <hr className="absolute right-1/2 top-2/4 inline-block w-20 -translate-x-1/2 -translate-y-1/2 bg-[black]" />
        <p className="text-base">or</p>
        <hr className="absolute left-1/2 top-2/4 inline-block w-20 -translate-y-1/2 translate-x-1/2 bg-[black]" />
      </div>
      <a
        href="/"
        className="mx-4 inline-flex items-center justify-center rounded-full border-zinc-500"
        style={{ width: '30px', height: '30px', borderWidth: '1px' }}
      >
        <FacebookFilled />
      </a>

      <button
        onClick={() => login()}
        type='button'
        className="mx-4 inline-flex items-center justify-center rounded-full border-zinc-500"
        style={{ width: '30px', height: '30px', borderWidth: '1px' }}
      >
        <GoogleCircleFilled />
      </button>
      <a
        href="/"
        className="mx-4 inline-flex items-center justify-center rounded-full border-zinc-500"
        style={{ width: '30px', height: '30px', borderWidth: '1px' }}
      >
        <LinkedinFilled />
      </a>
    </div>
  );
};
/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  FacebookFilled,
  GoogleCircleFilled,
  LinkedinFilled,
} from '@ant-design/icons';

export const SocialIcons = () => {
  return (
    <div className="my-4 mb-8">
      <div className="relative my-4 text-center">
        <hr className="absolute right-1/2 top-2/4 inline-block w-20 -translate-x-1/2 -translate-y-1/2 bg-[black]" />
        <p className="text-base">or</p>
        <hr className="absolute left-1/2 top-2/4 inline-block w-20 -translate-y-1/2 translate-x-1/2 bg-[black]" />
      </div>
      <a
        href="#"
        className="mx-4 inline-flex items-center justify-center rounded-full border-zinc-500"
        style={{ width: '30px', height: '30px', borderWidth: '1px' }}
      >
        <FacebookFilled />
      </a>
      <a
        href="#"
        className="mx-4 inline-flex items-center justify-center rounded-full border-zinc-500"
        style={{ width: '30px', height: '30px', borderWidth: '1px' }}
      >
        <GoogleCircleFilled></GoogleCircleFilled>
      </a>
      <a
        href="#"
        className="mx-4 inline-flex items-center justify-center rounded-full border-zinc-500"
        style={{ width: '30px', height: '30px', borderWidth: '1px' }}
      >
        <LinkedinFilled></LinkedinFilled>
      </a>
    </div>
  );
};

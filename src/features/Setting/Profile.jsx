import React from 'react';

import { Input, Tooltip, Upload } from 'antd';
import { MdPublic } from 'react-icons/md';
import { AiFillCamera } from 'react-icons/ai';
import Button from '../../ui/Button';
import FormRow from '../../ui/FormRow';

const { TextArea } = Input;

function Profile({ user }) {
  return (
    <div className="flex flex-col items-center mt-[50px] ">
      <img src="https://trello.com/assets/eff3d701a9c3a71105ea.svg" alt="" />

      <div className="w-full max-w-[530px]">
        <h3 className="text-[20px] font-medium leading-[26px] mt-[40px]">About</h3>
        <hr className="border-[1px] mt-[10px]" />

        <FormRow
          type="ver"
          label={
            <div className="flex justify-between items-center w-full">
              <div>Avatar</div>
              <Tooltip title="Visible to anyone on the internet" className="flex gap-2 items-center">
                <MdPublic />
                <span className="font-regular text-[--color-subtext]">Always public</span>
              </Tooltip>
            </div>
          }
        >
          <div className="flex justify-center mt-[40px]">
            <div className="relative">
              <img className="rounded-full" width={100} height={100} src={user.avatarPath} alt="/" />
              <Upload>
                <AiFillCamera
                  onClick={() => {}}
                  size={32}
                  className="p-[0.6rem] bg-black rounded-full absolute right-0 bottom-[2rem] text-white hover:opacity-80 cursor-pointer"
                />
              </Upload>
            </div>
          </div>
        </FormRow>

        <FormRow
          type="ver"
          label={
            <div className="flex justify-between items-center w-full">
              <div>Username</div>
              <Tooltip title="Visible to anyone on the internet" className="flex gap-2 items-center">
                <MdPublic />
                <span className="font-regular text-[--color-subtext]">Always public</span>
              </Tooltip>
            </div>
          }
        >
          <Input defaultValue={user.username} />
        </FormRow>

        <FormRow
          type="ver"
          label={
            <div className="flex justify-between items-center w-full">
              <div>Bio</div>
              <Tooltip title="Visible to anyone on the internet" className="flex gap-2 items-center">
                <MdPublic />
                <span className="font-regular text-[--color-subtext]">Always public</span>
              </Tooltip>
            </div>
          }
        >
          <TextArea rows={4} />
        </FormRow>

        <Button>Save</Button>
      </div>

      <div className="h-[50px]"></div>
    </div>
  );
}

export default Profile;

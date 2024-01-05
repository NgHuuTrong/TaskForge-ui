import React, { useState } from 'react';
import { Input, Tooltip, Upload } from 'antd';
import { MdPublic } from 'react-icons/md';
import { AiFillCamera } from 'react-icons/ai';
import Button from '../../ui/Button';
import FormRow from '../../ui/FormRow';
import UserDetail from '../../ui/UserDetail';
import ImgCrop from 'antd-img-crop';
import { useUpdateUser } from '../../hooks/useAuthenticate';
const { TextArea } = Input;

function Profile({ user }) {
  const [username, setUsername] = useState(user.username);
  const [bio, setBio] = useState(user.bio);
  const [file, setFile] = useState();
  const { updateUser, isLoading } = useUpdateUser();

  function handleSubmit(e) {
    e.preventDefault();
    if (!username && !bio && !file) return;
    updateUser({ username, bio, file });
  }
  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  };

  const handleUpload = (info) => {
    getBase64(info.file, (url) => {
      user.avatar = url;
    });
    setFile(info.file);
  };
  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

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
              <UserDetail user={user} showDetail={false} size={150} />
              <ImgCrop rotationSlider>
                <Upload
                  disabled={isLoading}
                  name="avatar"
                  showUploadList={false}
                  customRequest={handleUpload}
                  onPreview={onPreview}
                >
                  <AiFillCamera
                    onClick={() => {}}
                    size={32}
                    className="p-[0.6rem] bg-black rounded-full absolute right-0 bottom-[2rem] text-white hover:opacity-80 cursor-pointer"
                  />
                </Upload>
              </ImgCrop>
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
          <Input value={username} disabled={isLoading} onChange={(e) => setUsername(e.target.value)} />
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
          <TextArea rows={4} value={bio} disabled={isLoading} onChange={(e) => setBio(e.target.value)} />
        </FormRow>

        <Button disabled={isLoading} onClick={handleSubmit}>
          Save
        </Button>
      </div>

      <div className="h-[50px]"></div>
    </div>
  );
}

export default Profile;

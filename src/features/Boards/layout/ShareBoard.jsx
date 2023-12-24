import { useState } from 'react';
import { Input, Modal, Select } from 'antd';
import { IoMdAttach } from 'react-icons/io';
import { AiOutlineUserAdd } from 'react-icons/ai';

import Heading from '../../../ui/Heading';
import Button from '../../../ui/Button';
import Row from '../../../ui/Row';
import UserDetail from '../../../ui/UserDetail';

function MemberRow({ member, isAdmin = false }) {
  const role = isAdmin ? 'Admin' : 'Member';
  return (
    <Row>
      <UserDetail user={member} size="32" />
      <Select
        defaultValue={role}
        dropdownStyle={{ width: '28rem' }}
        options={[
          {
            value: 'Admin',
            disabled: !isAdmin,
          },
          {
            value: 'Member',
            disabled: !isAdmin,
          },
          {
            value: 'Remove from board',
            disabled: !isAdmin,
          },
        ]}
      />
    </Row>
  );
}

function ShareBoard({ creator, members, curMember }) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Button onClick={() => setOpenModal(true)} size="normal">
        <AiOutlineUserAdd />
        <span>Share</span>
      </Button>
      <Modal
        footer={null}
        centered
        open={openModal}
        onBlur={() => setOpenModal(false)}
        onCancel={() => setOpenModal(false)}
      >
        <div className="p-[2rem] flex flex-col gap-8">
          <Heading as="h3">Share board</Heading>
          <div className="flex gap-4">
            <Input placeholder="Email address or name" />
            <Button size="normal">Share</Button>
          </div>
          <Row>
            <div className="flex flex-col">
              <span>Share this board with a link</span>
              <Button type="text" classNames="pl-0 pt-0 pb-0">
                Disable Link
              </Button>
            </div>
            <Button type="icon" size="normal">
              <IoMdAttach className="rotate-45" />
              <span className="ml-[0.6rem]">Copy link</span>
            </Button>
          </Row>

          <MemberRow member={creator} isAdmin={curMember.userId !== creator.id} />
          {members.map((member) => (
            <MemberRow member={member} key={member.id} />
          ))}
        </div>
      </Modal>
    </>
  );
}

export default ShareBoard;

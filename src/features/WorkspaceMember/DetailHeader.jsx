import { AiOutlineUserAdd } from 'react-icons/ai';
import Button from '../../ui/Button';
import EditWorkspace from '../../ui/EditWorkspace';
import Heading from '../../ui/Heading';
import { Input, Modal } from 'antd';
import { useState } from 'react';
import Row from '../../ui/Row';
import { IoMdAttach } from 'react-icons/io';

function DetailHeader({ workspace }) {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <div className="flex justify-between items-start">
        <EditWorkspace workspace={workspace} />
        <Button size="normal" onClick={() => setOpenModal(true)}>
          <AiOutlineUserAdd size={16} />
          <span className="ml-[0.6rem]">Invite Workspace members</span>
        </Button>
        <Modal centered open={openModal} width={600} footer={false} title="" onCancel={() => setOpenModal(false)}>
          <div className="p-[2rem] flex flex-col gap-8">
            <Heading as="h3">Invite to Workspace</Heading>
            <Input className="w-full" placeholder="Email address or name" />
            <Row>
              <div className="flex flex-col">
                <span>Invite someone to {workspace.name} Workspace with a link</span>
                <Button type="text" classNames="pl-0 pt-0 pb-0">
                  Disable Link
                </Button>
              </div>
              <Button type="icon" size="normal">
                <IoMdAttach className="rotate-45" />
                <span className="ml-[0.6rem]">Copy link</span>
              </Button>
            </Row>
          </div>
        </Modal>
      </div>
      <hr className="border-[--color-grey-300] my-[1.6rem]" />
      <Heading as="h3">Workspace members (30)</Heading>
      <Heading as="h5" classNames="font-normal">
        Workspace members can view and join all Workspace visible boards and create new boards in the Workspace.
      </Heading>
      <hr className="border-[--color-grey-300] my-[1.6rem]" />
    </>
  );
}

export default DetailHeader;

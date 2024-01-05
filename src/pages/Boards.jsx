import Heading from '../ui/Heading';
import Row from '../ui/Row';
import { AiOutlineClockCircle } from 'react-icons/ai';
import WorkspaceSection from '../features/Boards/WorkspaceSection';
import Button from '../ui/Button';
import { useWorkspaces } from '../hooks/useWorkspace';
import Spinner from '../ui/Spinner';
import { Modal } from 'antd';
import { useState } from 'react';
import { GoArchive } from "react-icons/go";
import { Link } from 'react-router-dom';
import { IoMdClose } from 'react-icons/io';
import { useUser } from '../features/Authenticate/useUser';
import { useDeleteBoard, useLeaveBoard, useUpdateBoard } from '../hooks/useBoard';
import { useQueryClient } from '@tanstack/react-query';

function Boards() {
  const { workspaces, isLoading } = useWorkspaces();
  const { isLoading: isLoadingUser, user } = useUser();
  const { isUpdating, updateBoard } = useUpdateBoard();
  const { isDeleting, removeBoard } = useDeleteBoard();
  const { isLeaving, mutate: leaveBoard } = useLeaveBoard();
  const queryClient = useQueryClient();

  const [openModal, setOpenModal] = useState(false);
  if (isLoading || isLoadingUser) return <Spinner />;

  function renderClosedBoards() {
    console.log('workspaces', workspaces);
    const closedBoards = [];

    workspaces.forEach(workspace => {
      workspace.boards.forEach(board => {
        if (board.closed)
          closedBoards.push({ ...board, workspaceName: workspace.name });
      })
    });

    return closedBoards.map(board => {
      if (board.boardMembers.some(bm => bm.userId === user.id)) {
        return <div className="flex justify-between items-center" key={board.id}>
          <div className='my-[1rem]'>
            <Link className='text-[1.6rem] text-[--color-blue-700] hover:underline' to={`/b/${board.id}/board-detail`}>{board.name}</Link>
            <p className='text-[1.3rem] text-[--color-grey-500]'>{board.workspaceName}</p>
          </div>
          <div className='flex items-center gap-[1rem]'>
            {
              board.creatorId === user.id ? <>
                <Button
                  type='secondary' size='normal'
                  onClick={() => removeBoard(board.id)}
                  disabled={isUpdating || isDeleting}
                >
                  <IoMdClose /> Delete
                </Button>
                <Button
                  size='normal'
                  onClick={() => updateBoard({ boardId: board.id, body: { closed: false } }, {
                    onSuccess: () => {
                      queryClient.invalidateQueries({ queryKey: ['workspaces'], exact: true });
                      queryClient.invalidateQueries({ queryKey: ['boards'], exact: true });
                    }
                  })}
                  disabled={isUpdating || isDeleting}
                >
                  <IoMdClose /> Reopen
                </Button>
              </> : <Button
                type='danger' size='normal'
                onClick={() => leaveBoard(board.id)}
                disabled={isLeaving}
              >
                <IoMdClose /> Leave
              </Button>
            }
          </div>
        </div>
      }
    })
  }

  return (
    <Row type="ver" classNames="pt-[2rem] px-[2rem]">
      <div className="mb-[5rem]">
        <Heading classNames="flex items-center gap-4 mb-[1rem]" as="h5">
          <AiOutlineClockCircle size="2.5rem" />
          Recently viewed
        </Heading>
      </div>
      <div className="space-y-10">
        <Heading classNames="uppercase flex items-center gap-4" as="h4">
          Your workspaces
        </Heading>
        {workspaces.map((workspace) => (
          <WorkspaceSection workspace={workspace} key={workspace.id} />
        ))}
        <Button
          classNames="flex items-center font-semibold gap-2 px-[2rem]" size="small" type="secondary"
          onClick={() => setOpenModal(true)}
        >
          View all closed boards
        </Button>
        <Modal
          title={<Heading classNames='gap-[1rem] py-[1rem] border-b-2' as='h3'><GoArchive /> Closed boards</Heading>}
          footer={null}
          onCancel={() => setOpenModal(false)}
          open={openModal}
          className='p-[2rem]'
          s={{
            width: '500px'
          }}
        >
          {renderClosedBoards()}
        </Modal>
      </div>
    </Row>
  );
}

export default Boards;

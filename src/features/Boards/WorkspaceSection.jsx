import { Avatar } from "antd"
import Row from "../../ui/Row"
import Button from "../../ui/Button"
import { HiOutlineViewBoards, HiOutlineUsers } from 'react-icons/hi'
import { PiGearLight } from 'react-icons/pi'
import BoardCard from "./BoardCard"

function WorkspaceSection() {
    return (
        <div className="space-y-8 pb-[3rem]">
            <Row>
                <div className='flex items-center gap-5 text-[1.6rem] leading-[30px] font-bold'>
                    <Avatar
                        className='z-0'
                        shape='square'
                        size='large'
                        style={{ backgroundColor: '#fde3cf', color: '#f56a00' }}
                    >
                        <span className="text-[1.7rem]">C</span>
                    </Avatar>
                    {'CS202 - Project'}
                </div>
                <div className="flex gap-4">
                    <Button classNames="flex items-center font-semibold gap-2 px-[1rem]" size="small" type="secondary">
                        <HiOutlineViewBoards size='1.2rem' />
                        Boards
                    </Button>
                    <Button classNames="flex items-center font-semibold gap-2 px-[1rem]" size="small" type="secondary">
                        <HiOutlineUsers size='1.2rem' />
                        Members (1)
                    </Button>
                    <Button classNames="flex items-center font-semibold gap-2 px-[1rem]" size="small" type="secondary">
                        <PiGearLight size='1.5rem' />
                        Settings
                    </Button>
                </div>
            </Row>
            <div className="flex items-center flex-wrap gap-5">
                <BoardCard />
                <BoardCard />
                <div className="w-[200px] h-[95px] flex flex-col justify-center text-center bg-[--color-grey-200] rounded-md cursor-pointer hover:bg-[--color-grey-400]">
                    <span className="text-[--color-grey-500] text-[1.3rem] font-light">Create new board</span>
                </div>
            </div>
        </div>
    )
}

export default WorkspaceSection
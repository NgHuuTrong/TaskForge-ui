import { Popover, Input } from "antd"
import UserDetail from "../../../../ui/UserDetail"
import { FaCheck } from "react-icons/fa"
import { useEffect, useState } from "react"
import { useBoardMembers } from "../../../../hooks/useBoard"
import { useParams } from "react-router-dom"
import { useAssignMemberToCard } from "../../../../hooks/useCard"
import { useWebsocket } from "../../../../context/WebsocketContext"

function MembersPopover({ children, assignees }) {
    return (
        <Popover
            placement="bottomLeft"
            title={<h1 className="font-bold text-center text-[--color-grey-800]">Members</h1>}
            content={<MembersPopoverContent assignees={assignees} />}
            trigger="click"
        >
            <>
                {children}
            </>
        </Popover>
    )
}

function MembersPopoverContent({ assignees }) {
    const assigneeIds = assignees.map(assignee => assignee.id);
    const [searchValue, setSearchValue] = useState('');
    const [boardMembers, setBoardMembers] = useState([]);
    const { members } = useBoardMembers(searchValue);

    useEffect(function () {
        if (members && members.length > 0) {
            setBoardMembers(members);
        }
    }, [members])

    function handleSearch(event) {
        if (event.target.value.trim() === '') {
            setBoardMembers(members);
        } else {
            setBoardMembers(members.filter(member => {
                if (
                    member.name.toLowerCase().includes(event.target.value.trim().toLowerCase()) ||
                    member.username.toLowerCase().includes(event.target.value.trim().toLowerCase())
                )
                    return true;
                return false;
            }));
        }
        setSearchValue(event.target.value)
    }

    return (
        <div className="bg-[--color-grey-0]">
            <Input
                classNames="w-full rounded-none text-[--color-grey-800] outline-[--color-blue-700]"
                suffix={false}
                placeholder="Search members"
                value={searchValue}
                onChange={handleSearch}
            />
            <h1 className="font-bold text-[1.2rem] text-[--color-grey-600] mt-[1rem]">Board members</h1>
            <div className="space-y-2 mt-3">
                {
                    boardMembers.map(boardMember => <MemberItem key={boardMember.id} item={boardMember} isAssignee={assigneeIds.includes(boardMember.id)} />)
                }
            </div>
        </div>
    )
}

function MemberItem({ item, isAssignee }) {
    const { cardId } = useParams();
    const { isAssigning, assignMember } = useAssignMemberToCard();
    const { socket } = useWebsocket();

    return (
        <button
            className="w-full flex items-center justify-between gap-5 p-2 rounded-lg cursor-pointer bg-[--color-grey-0] hover:bg-[--color-grey-200]"
            disabled={isAssigning}
            onClick={() => {
                assignMember({ body: { cardId: +cardId, assigneeId: item.id } });
                if (!isAssignee) {
                    socket.emit('createNotification', {
                        type: 'ASSIGNMENT',
                        receiverId: item.id,
                        cardId: +cardId,
                    });
                }
            }}
        >
            <div className="flex items-center gap-2">
                <UserDetail showDetail={false} size={28} user={item} />
                <span className="text-[--color-grey-600]">{item.name} ({item.username})</span>
            </div>
            {
                isAssignee && <span>
                    <FaCheck />
                </span>
            }
        </button>
    )
}

export default MembersPopover;
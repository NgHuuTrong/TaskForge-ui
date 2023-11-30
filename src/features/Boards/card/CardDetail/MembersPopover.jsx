import { Avatar, Popover } from "antd"
import Input from "../../../../ui/Input"

function MembersPopover({ children }) {
    return (
        <Popover
            placement="bottomLeft"
            title={<h1 className="font-bold text-center text-[--color-grey-800]">Members</h1>}
            content={<MembersPopoverContent />}
            trigger="click"
        >
            <>
                {children}
            </>
        </Popover>
    )
}

function MembersPopoverContent() {
    return (
        <div className="bg-[--color-grey-0]">
            <Input
                classNames="w-full rounded-none text-[--color-grey-800] outline-[--color-blue-700] mb-5"
                placeholder="Search members"
            />
            <h1 className="font-bold text-[1.2rem] text-[--color-grey-600]">Board members</h1>
            <div className="space-y-2 mt-3">
                <MemberItem />
                <MemberItem />
                <MemberItem />
            </div>
        </div>
    )
}

function MemberItem() {
    return (
        <div className="flex items-center gap-5 p-2 rounded-lg cursor-pointer bg-[--color-grey-0] hover:bg-[--color-grey-200]">
            <Avatar style={{ backgroundColor: '#87d068' }}>K</Avatar>
            <span className="text-[--color-grey-600]">Nguyen Van Hieu (ngvahiu)</span>
        </div>
    )
}

export default MembersPopover;
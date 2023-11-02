import { Avatar } from "antd"
import { BsPlusLg } from 'react-icons/bs'
import MembersPopover from "./MembersPopover"

function CardDetailMembers() {
  return (
    <div className="ml-[2rem] space-y-2">
      <h1 className="text-[1.3rem] text-[--color-grey-600] font-medium">Members</h1>
      <div className="flex items-center gap-5">
        <Avatar.Group
          maxCount={2}
          maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf' }}
        >
          <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2" />
          <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
          <Avatar style={{ backgroundColor: '#87d068' }}>K</Avatar>
          <Avatar style={{ backgroundColor: '#1677ff' }}>K</Avatar>
        </Avatar.Group>
        <MembersPopover>
          <Avatar className="flex items-center justify-center cursor-pointer bg-[--color-grey-300] text-[--color-grey-700] hover:bg-[--color-grey-200]">
            <BsPlusLg size='1.8rem' />
          </Avatar>
        </MembersPopover>
      </div>
    </div>
  )
}

export default CardDetailMembers;
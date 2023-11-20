import { RiAttachment2 } from "react-icons/ri"
import { BiLinkExternal } from "react-icons/bi"

function CardDetailAttachments() {
  return (
    <div>
      <div className='flex items-center gap-5 mt-5'>
        <RiAttachment2 size="2rem" />
        <h1 className='text-[1.7rem] text-[--color-grey-700] font-semibold'>Attachments</h1>
      </div>
      <div className="space-y-2 ml-[2rem] mt-[1rem]">
        <Attachment type='img' />
        <Attachment type='file' />
        <Attachment type='link' />
      </div>
    </div>
  )
}

function Attachment({ type }) {
  function renderThumbnail() {
    switch (type) {
      case 'img':
        return <img className="w-full h-full" src="https://picsum.photos/300/300" alt="img" />
      case 'file':
        return <div className="w-full h-full bg-[--color-grey-200] flex justify-center items-center">
          <span className="text-[1.5rem] text-[--color-grey-600] font-bold">pdf</span>
        </div>
      default:
        return <div className="w-full h-full bg-[--color-grey-200] flex justify-center items-center">
          <RiAttachment2 size="2rem" />
        </div>
    }
  }

  return (
    <div className="rounded-xl cursor-pointer bg-transparent hover:bg-[--color-grey-300]">
      <div className="flex items-center gap-2 h-[100px]">
        <div className="w-[100px] h-full">
          {renderThumbnail()}
        </div>
        <div className="flex flex-col justify-start h-full p-2 grow">
          <h1 className='flex items-center gap-2 text-[1.7rem] text-[--color-grey-700] font-bold'>
            Attachment abc <BiLinkExternal />
          </h1>
          <p className="flex item-center gap-2 text-[1.3rem]">
            <span>Added 4 hours ago</span>
            <span className='text-[--color-grey-500]'>•</span>
            <span className="underline cursor-pointer">Comment</span>
            <span className='text-[--color-grey-500]'>•</span>
            <span className="underline cursor-pointer">Remove</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default CardDetailAttachments
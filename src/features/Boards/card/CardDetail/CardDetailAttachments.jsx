import { RiAttachment2 } from "react-icons/ri"
import { BiLinkExternal } from "react-icons/bi"
import { format } from 'timeago.js';
import { useDeleteCardAttachment } from "../../../../hooks/useCard";
import EditAttachmentPopover from "./EditAttachmentPopover";

const imageRegex = /[^\s]+(.*?).(jpg|jpeg|png|gif|JPG|JPEG|PNG|GIF)$/;

function getFileExtension(filename) {
  const extension = filename.substring(filename.lastIndexOf('.') + 1, filename.length);
  return extension;
}

function CardDetailAttachments({ attachments }) {
  return (
    (attachments && attachments.length > 0) && <div>
      <div className='flex items-center gap-5 mt-5'>
        <RiAttachment2 className="text-[--color-grey-700]" size="2rem" />
        <h1 className='text-[1.7rem] text-[--color-grey-700] font-semibold'>Attachments</h1>
      </div>
      <div className="space-y-2 ml-[2rem] mt-[1rem]">
        {
          attachments?.sort((a, b) => a.id - b.id).map((attachment) => {
            if (attachment.type === "LINK") {
              return <Attachment key={attachment.id} type='link' attachment={attachment} />
            } else if (imageRegex.test(attachment.fileName)) {
              return <Attachment key={attachment.id} type='img' attachment={attachment} />
            } else {
              return <Attachment key={attachment.id} type='file' attachment={attachment} />
            }
          })
        }
      </div>
    </div>
  )
}

function Attachment({ type, attachment }) {
  const { isDeleting, removeCardAttachment } = useDeleteCardAttachment();

  function renderThumbnail() {
    switch (type) {
      case 'img':
        return <img className="w-full h-full" src={attachment?.url} alt="img" />
      case 'file':
        return <div className="w-full h-full bg-[--color-grey-200] flex justify-center items-center">
          <span className="text-[1.5rem] text-[--color-grey-600] font-bold">{getFileExtension(attachment?.fileName)}</span>
        </div>
      default:
        return <div className="w-full h-full bg-[--color-grey-200] flex justify-center items-center">
          <RiAttachment2 className="text-[--color-grey-600]" size="2rem" />
        </div>
    }
  }

  return (
    <div className="rounded-xl bg-transparent hover:bg-[--color-grey-100]">
      <div className="flex items-center gap-2 h-[100px]">
        <div className="w-[100px] h-full">
          {renderThumbnail()}
        </div>
        <div className="flex flex-col justify-start h-full p-2 grow">
          <h1 className='flex items-center gap-2 text-[1.7rem] text-[--color-grey-700] font-bold'>
            <a
              className="flex items-center gap-[0.5rem] hover:underline"
              href={type === 'file' ? `http://localhost:3000/api/cards/download-file/${attachment?.id}` : attachment?.url}
              target="_blank" rel="noopener noreferrer"
            >
              {attachment?.fileName} <BiLinkExternal />
            </a>
          </h1>
          <p className="flex item-center gap-2 text-[1.3rem]">
            <span className="text-[--color-grey-500]">Added {format(attachment?.createdAt)}</span>
            <span className='text-[--color-grey-500]'>•</span>
            <EditAttachmentPopover type={type} attachment={attachment}>
              <span className="text-[--color-grey-500] underline cursor-pointer">Edit</span>
            </EditAttachmentPopover>
            <span className='text-[--color-grey-500]'>•</span>
            <button
              className="text-[--color-grey-500] underline cursor-pointer"
              disabled={isDeleting}
              onClick={() => removeCardAttachment(attachment?.id)}
            >
              Remove
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}

export default CardDetailAttachments
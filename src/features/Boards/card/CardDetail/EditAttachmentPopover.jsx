import { Input, Popover } from "antd"
import Button from "../../../../ui/Button"
import { useState } from "react"
import { useUpdateCardAttachment } from "../../../../hooks/useCard";

function EditAttachmentPopover({ children, type, attachment }) {
    return (
        <Popover
            placement="bottom"
            title={<h1 className="font-bold text-center text-[1.5rem] text-[--color-grey-800]">Edit attachment</h1>}
            content={<EditAttachmentPopoverContent type={type} attachment={attachment} />}
            trigger="click"
        >
            <>
                {children}
            </>
        </Popover>
    )
}

function EditAttachmentPopoverContent({ type, attachment }) {
    const [fileName, setFileName] = useState(attachment?.fileName);
    const [linkName, setLinkName] = useState(attachment?.url);
    const { isUpdating, updateAttachment } = useUpdateCardAttachment();

    function handleUpdateAttachment() {
        if (type === "link" && fileName !== '' && linkName !== '') {
            updateAttachment({
                attachmentId: attachment?.id,
                body: {
                    fileName,
                    url: linkName
                }
            });
        } else if (fileName !== '') {
            updateAttachment({
                attachmentId: attachment?.id,
                body: {
                    fileName
                }
            });
        }
    }

    return (
        <div className="min-w-[200px] space-y-4">
            {
                type === "link" && <>
                    <h1 className="text-[--color-grey-600] font-bold">Link</h1>
                    <Input
                        classNames="w-full text-[--color-grey-800] rounded-none outline-[--color-blue-700] mb-5"
                        placeholder="Text to display"
                        value={linkName}
                        onChange={(e) => setLinkName(e.target.value)}
                    />
                </>
            }
            <h1 className="text-[--color-grey-600] font-bold">Link name</h1>
            <Input
                classNames="w-full text-[--color-grey-800] rounded-none outline-[--color-blue-700] mb-5"
                placeholder="Text to display"
                value={fileName}
                onChange={(e) => setFileName(e.target.value)}
            />
            <Button
                type='primary' size='small' disabled={isUpdating}
                onClick={handleUpdateAttachment}
            >
                Update
            </Button>
        </div>
    )
}

export default EditAttachmentPopover
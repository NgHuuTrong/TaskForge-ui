import { Popover, Upload } from "antd"
import CardDetailButton from "./CardDetailButton"
import Input from "../../../../ui/Input"
import Button from "../../../../ui/Button"

function AttachmentPopover({ children }) {
    return (
        <Popover
            placement="bottomLeft"
            title={<h1 className="font-bold text-center text-[--color-grey-800]">Attach</h1>}
            content={<AttachmentPopoverContent />}
            trigger="click"
        >
            <>
                {children}
            </>
        </Popover>
    )
}

function AttachmentPopoverContent() {
    return (
        <div className="space-y-4">
            <div>
                <h1 className="text-[--color-grey-600] font-bold">Attach a file from your computer</h1>
                <p className="text-[--color-grey-400] text-[1.2rem]">You can also drag and drop files to upload them.</p>
                <Upload>
                    <CardDetailButton classNames="justify-center">Choose a file</CardDetailButton>
                </Upload>
            </div>
            <hr />
            <div className="space-y-2">
                <h1 className="text-[--color-grey-600] font-bold">Paste a link</h1>
                <Input
                    classNames="w-full text-[--color-grey-800] rounded-none outline-[--color-blue-700] mb-5"
                    placeholder="Paste a new link"
                />
                <h1 className="text-[--color-grey-600] font-bold">Display text (optional)</h1>
                <Input
                    classNames="w-full text-[--color-grey-800] rounded-none outline-[--color-blue-700] mb-5"
                    placeholder="Text to display"
                />
                <div className='flex space-x-3 mt-3'>
                    <Button type='primary' size='small'>Save</Button>
                    <Button type='secondary' size='small'>Cancel</Button>
                </div>
            </div>
        </div>
    )
}

export default AttachmentPopover
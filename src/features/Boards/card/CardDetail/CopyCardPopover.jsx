import { Checkbox, Popover, Select } from "antd"
import Button from "../../../../ui/Button"

function CopyCardPopover({ children }) {
    return (
        <Popover placement="bottomLeft" title={<h1 className="font-bold text-center">Copy card</h1>} content={<CopyPopoverContent />} trigger="click">
            <>
                {children}
            </>
        </Popover>
    )
}

function CopyPopoverContent() {
    return (
        <div className="space-y-4">
            <div>
                <h1 className="text-[--color-grey-600] font-bold">Title</h1>
                <textarea className="border-2 outline-[--color-blue-700] min-w-[250px]" />
            </div>
            <div className="space-y-2">
                <h1 className="text-[--color-grey-600] font-bold">Keep...</h1>
                <div className="flex flex-col">
                    <Checkbox>Members (1)</Checkbox>
                    <Checkbox>Attachments (2)</Checkbox>
                </div>
                <h1 className="text-[--color-grey-600] font-bold">List</h1>
                <Select
                    defaultValue="list-1"
                    style={{ width: 120 }}
                    options={[
                        { value: 'list-1', label: 'list-1' },
                        { value: 'list-2', label: 'list-2' },
                        { value: 'list-3', label: 'list-3' },
                    ]}
                />
            </div>
            <Button classNames="mt-3" type='primary' size='small'>Create card</Button>
        </div>
    )
}

export default CopyCardPopover
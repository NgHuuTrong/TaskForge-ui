import { Form, Input, Popover, Upload } from "antd"
import CardDetailButton from "./CardDetailButton"
import Button from "../../../../ui/Button"
import { useState } from "react"
import { useUploadFile, useUploadLink } from "../../../../hooks/useCard"
import { useParams } from "react-router-dom"
import toast from "react-hot-toast"

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
    const [link, setLink] = useState('');
    const [linkName, setLinkName] = useState('');
    const [fileSrc, setFileSrc] = useState(null);

    const { cardId } = useParams();
    const { isUploading: isUploadingLink, uploadLink } = useUploadLink();
    const { isUploading: isUploadingFile, uploadFile } = useUploadFile();

    function handleUploadLink() {
        if (link !== '' && linkName !== '') {
            uploadLink({ cardId, body: { fileName: linkName, url: link } });
        }
    }

    function handleUploadFile() {
        const formData = new FormData();

        if (fileSrc) {
            formData.append('attachment', fileSrc);
            uploadFile({ cardId, body: formData });
        }
    }

    return (
        <div className="space-y-4">
            <div>
                <h1 className="text-[--color-grey-600] font-bold">Attach a file from your computer</h1>
                <p className="text-[--color-grey-400] text-[1.2rem]">You can also drag and drop files to upload them.</p>
                <Upload
                    maxCount={1}
                    beforeUpload={(file) => {
                        return new Promise((resolve, reject) => {
                            if (file.size > 9000000) {
                                // toast.error("Attachment size exceeded");
                                reject("Attachment size exceeded");
                            } else {
                                resolve("Successfully uploaded");
                            }
                        })
                    }}
                    customRequest={(info) => {
                        console.log(info.file);
                        setFileSrc(info.file);
                        handleUploadFile();
                    }}
                    showUploadList={false}
                >
                    <CardDetailButton classNames="justify-center" disabled={isUploadingFile}>Choose a file</CardDetailButton>
                </Upload>
            </div>
            <hr />
            <Form onSubmitCapture={handleUploadLink}>
                <h1 className="text-[--color-grey-600] font-bold">Paste a link</h1>
                <Form.Item
                    name='link'
                    rules={[
                        {
                            required: true,
                            message: 'Link URL is required.',
                        }
                    ]}
                >
                    <Input
                        classNames="w-full text-[--color-grey-800] rounded-none outline-[--color-blue-700] mb-5"
                        placeholder="Paste a new link"
                        value={link}
                        onChange={(e) => setLink(e.target.value)}
                    />
                </Form.Item>
                <h1 className="text-[--color-grey-600] font-bold">Display text</h1>
                <Form.Item
                    name='linkName'
                    rules={[
                        {
                            required: true,
                            message: 'Displaying name is required.',
                        }
                    ]}
                >
                    <Input
                        classNames="w-full text-[--color-grey-800] rounded-none outline-[--color-blue-700] mb-5"
                        placeholder="Text to display"
                        value={linkName}
                        onChange={(e) => setLinkName(e.target.value)}
                    />
                </Form.Item>
                <div className='flex space-x-3 mt-3'>
                    <Button type='primary' size='small' disabled={isUploadingLink} buttonType='submit'>Save</Button>
                    <Button type='secondary' size='small' disabled={isUploadingLink} buttonType='button'>Cancel</Button>
                </div>
            </Form>
        </div>
    )
}

export default AttachmentPopover
import { Avatar } from "antd";
import Button from "../../../../ui/Button";
import { useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { RxActivityLog } from "react-icons/rx";

function CardDetailActivity() {
    const editorRef = useRef(null);
    const [contentComment, setContentComment] = useState('');

    return (
        <div className='w-full'>
            <div className='flex items-center gap-5'>
                <RxActivityLog size="2rem" />
                <h1 className='text-[1.7rem] text-[--color-grey-700] font-semibold'>Activity</h1>
            </div>
            <div className='flex gap-2 mt-5'>
                <Avatar style={{ backgroundColor: 'orange' }} size={30} />
                <div className='grow'>
                    <Editor
                        onInit={(evt, editor) => editorRef.current = editor}
                        initialValue=""
                        init={{
                            menubar: false,
                            plugins: [
                                'advlist autolink lists link image charmap print preview anchor',
                                'searchreplace visualblocks code fullscreen',
                                'insertdatetime media table paste code help wordcount',
                                'lists'
                            ],
                            block_formats: 'Paragraph=p; Header 1=h1; Header 2=h2; Header 3=h3',
                            style_formats: [
                                {
                                    title: 'Headers', items: [
                                        { title: 'Header 1', format: 'h1' },
                                        { title: 'Header 2', format: 'h2' },
                                        { title: 'Header 3', format: 'h3' },
                                        { title: 'Header 4', format: 'h4' },
                                        { title: 'Header 5', format: 'h5' },
                                        { title: 'Header 6', format: 'h6' }
                                    ]
                                },
                                {
                                    title: 'Inline', items: [
                                        { title: 'Bold', icon: 'bold', format: 'bold' },
                                        { title: 'Italic', icon: 'italic', format: 'italic' },
                                        { title: 'Underline', icon: 'underline', format: 'underline' },
                                        { title: 'Strikethrough', icon: 'strikethrough', format: 'strikethrough' },
                                        { title: 'Superscript', icon: 'superscript', format: 'superscript' },
                                        { title: 'Subscript', icon: 'subscript', format: 'subscript' },
                                        { title: 'Code', icon: 'code', format: 'code' }
                                    ]
                                }
                            ],
                            toolbar: 'undo redo | styleselect | bold italic | forecolor backcolor | alignleft aligncenter alignright alignjustify | indent outdent | bullist numlist | remove removeformat | wordcount',
                            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                            height: 150,
                            width: '100%',
                            placeholder: 'Write a comment...'
                        }}
                        onEditorChange={(value) => setContentComment(value)}
                        value={contentComment}
                    />
                    {
                        contentComment && <div className='flex gap-3 mt-3'>
                            <Button type='primary' size='small'>Save</Button>
                            <Button type='secondary' size='small' onClick={() => setContentComment('')}>Cancel</Button>
                        </div>
                    }
                </div>
            </div>
            <Comment />
            <Comment />
        </div>
    )
}

function Comment() {
    const [allowEdit, setAllowEdit] = useState(false);
    const editorRef = useRef(null);

    return (
        <div className='flex gap-[1rem] mt-5 w-full'>
            <Avatar style={{ backgroundColor: 'orange' }} size={30} />
            <div className='flex flex-col gap-2 grow'>
                <p className='space-x-3'>
                    <span className='font-medium text-[--color-grey-900]'>Nguyen Van Hieu</span>
                    <span className='text-base'>Oct 27 at 9:35 PM</span>
                </p>
                {
                    allowEdit ? <>
                        <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            initialValue=""
                            init={{
                                menubar: false,
                                plugins: [
                                    'advlist autolink lists link image charmap print preview anchor',
                                    'searchreplace visualblocks code fullscreen',
                                    'insertdatetime media table paste code help wordcount',
                                    'lists'
                                ],
                                block_formats: 'Paragraph=p; Header 1=h1; Header 2=h2; Header 3=h3',
                                style_formats: [
                                    {
                                        title: 'Headers', items: [
                                            { title: 'Header 1', format: 'h1' },
                                            { title: 'Header 2', format: 'h2' },
                                            { title: 'Header 3', format: 'h3' },
                                            { title: 'Header 4', format: 'h4' },
                                            { title: 'Header 5', format: 'h5' },
                                            { title: 'Header 6', format: 'h6' }
                                        ]
                                    },
                                    {
                                        title: 'Inline', items: [
                                            { title: 'Bold', icon: 'bold', format: 'bold' },
                                            { title: 'Italic', icon: 'italic', format: 'italic' },
                                            { title: 'Underline', icon: 'underline', format: 'underline' },
                                            { title: 'Strikethrough', icon: 'strikethrough', format: 'strikethrough' },
                                            { title: 'Superscript', icon: 'superscript', format: 'superscript' },
                                            { title: 'Subscript', icon: 'subscript', format: 'subscript' },
                                            { title: 'Code', icon: 'code', format: 'code' }
                                        ]
                                    }
                                ],
                                toolbar: 'undo redo | styleselect | bold italic | forecolor backcolor | alignleft aligncenter alignright alignjustify | indent outdent | bullist numlist | remove removeformat | wordcount',
                                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                                height: 150,
                                width: '100%',
                                placeholder: 'Write a comment...'
                            }}
                        />
                        <div className='space-x-3 mt-3'>
                            <Button type='primary' size='small'>Save</Button>
                            <Button type='secondary' size='small' onClick={() => setAllowEdit(false)}>Discard changes</Button>
                        </div>
                    </> : <>
                        <input
                            className='bg-[--color-grey-0] px-2 py-3 border rounded-2xl disabled:bg-[--color-grey-0] disabled:cursor-default outline-[--color-blue-700] shadow grow'
                            defaultValue='Comment 123'
                            disabled={!allowEdit}
                        />
                        <div className='flex items-center gap-2'>
                            <span
                                className='text-[--color-grey-500] text-lg cursor-pointer underline'
                                onClick={() => setAllowEdit(true)}
                            >
                                Edit
                            </span>
                            <span className='text-[--color-grey-500]'>•</span>
                            <span className='text-[--color-grey-500] text-lg cursor-pointer underline'>Add link as attachment</span>
                            <span className='text-[--color-grey-500]'>•</span>
                            <span className='text-[--color-grey-500] text-lg cursor-pointer underline'>Delete</span>
                        </div>
                    </>
                }
            </div>
        </div>
    )
}

export default CardDetailActivity;
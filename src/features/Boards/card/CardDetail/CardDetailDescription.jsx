import { Editor } from "@tinymce/tinymce-react";
import Button from "../../../../ui/Button";
import { useRef, useState } from "react";
import { HiBars3BottomLeft } from "react-icons/hi2";

function CardDetailDescription() {
    const editorRef = useRef(null);
    const [showEditor, setShowEditor] = useState(false);

    return (
        <div>
            <div className='flex items-center gap-5 mt-5'>
                <HiBars3BottomLeft size="2rem" />
                <h1 className='text-[1.7rem] text-[--color-grey-700] font-semibold'>Description</h1>
            </div>
            <div className='ml-[2.5rem] mt-4'>
                {
                    !showEditor ? <button className='bg-[--color-grey-100] text-[--color-grey-700] text-left font-semibold pl-[1.5rem] pt-[1rem] pb-[2rem] w-full cursor-pointer hover:bg-[--color-grey-200]' onClick={() => setShowEditor(true)}>
                        Add a more detailed description...
                    </button> : <div>
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
                                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                            }}
                        />
                        <div className='space-x-3 mt-3'>
                            <Button type='primary' size='small'>Save</Button>
                            <Button type='secondary' size='small' onClick={() => setShowEditor(false)}>Cancel</Button>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default CardDetailDescription;
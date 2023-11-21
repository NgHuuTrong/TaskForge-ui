import { Avatar } from "antd";
import Button from "../../../../ui/Button";
import { useState } from "react";
import { RxActivityLog } from "react-icons/rx";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css'

function CardDetailActivity() {
    const [contentComment, setContentComment] = useState('');

    var toolbarOptions = [
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons

        [{ 'header': 1 }, { 'header': 2 }],               // custom button values
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],

        [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

        [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
        [{ 'font': [] }],
        [{ 'align': [] }],

        ['clean']
    ];
    const module = {
        toolbar: toolbarOptions
    };

    return (
        <div className='w-full'>
            <div className='flex items-center gap-5'>
                <RxActivityLog size="2rem" />
                <h1 className='text-[1.7rem] text-[--color-grey-700] font-semibold'>Activity</h1>
            </div>
            <div className='grid grid-cols-12 mt-5'>
                <div className="col-span-1">
                    <Avatar style={{ backgroundColor: 'orange' }} size={30} />
                </div>
                <div className="col-span-10">
                    <ReactQuill className="w-full" modules={module} theme="snow" value={contentComment} onChange={setContentComment} />
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
    const [value, setValue] = useState('');

    var toolbarOptions = [
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons

        [{ 'header': 1 }, { 'header': 2 }],               // custom button values
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],

        [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

        [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
        [{ 'font': [] }],
        [{ 'align': [] }],

        ['clean']
    ];
    const module = {
        toolbar: toolbarOptions
    };

    return (
        <div className='grid grid-cols-12 mt-5 w-full'>
            <div className="col-span-1">
                <Avatar style={{ backgroundColor: 'orange' }} size={30} />
            </div>
            <div className='col-span-10'>
                <p className='space-x-3 w-full'>
                    <span className='font-medium text-[--color-grey-900]'>Nguyen Van Hieu</span>
                    <span className='text-base text-[--color-grey-500]'>Oct 27 at 9:35 PM</span>
                </p>
                {
                    allowEdit ? <>
                        <ReactQuill className="w-full" modules={module} theme="snow" value={value} onChange={setValue} />
                        <div className='flex space-x-3 mt-3 '>
                            <Button type='primary' size='small'>Save</Button>
                            <Button type='secondary' size='small' onClick={() => {
                                setValue('');
                                setAllowEdit(false)
                            }}>Discard changes</Button>
                        </div>
                    </> : <>
                        <input
                            className='w-full bg-[--color-grey-0] px-2 py-3 border rounded-2xl disabled:bg-[--color-grey-0] disabled:cursor-default outline-[--color-blue-700] shadow grow'
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
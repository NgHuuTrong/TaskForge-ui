import Button from "../../../../ui/Button";
import { useState } from "react";
import { HiBars3BottomLeft } from "react-icons/hi2";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css'
import { useUpdateCard } from "../../../../hooks/useCard";
import { toast } from "react-hot-toast";

function CardDetailDescription({ cardId, description }) {
    const [showEditor, setShowEditor] = useState(false);
    const [value, setValue] = useState('');
    const { isUpdating, updateCard } = useUpdateCard();

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

    function isQuillEmpty(value) {
        if (value.replace(/<(.|\n)*?>/g, '').trim().length === 0 && !value.includes("<img")) {
            return true;
        }
        return false;
    }

    function updateDescription() {
        if (!isQuillEmpty(value)) {
            updateCard({ cardId, body: { description: value } }, {
                onSuccess: () => {
                    toast.success('Update description successfully');
                    setValue('');
                    setShowEditor(false)
                }
            });
        } else {
            updateCard({ cardId, body: { description: null } }, {
                onSuccess: () => {
                    toast.success('Update description successfully');
                    setValue('');
                    setShowEditor(false)
                }
            });
        }
    }

    return (
        <div>
            <div className='flex items-center justify-between mt-5'>
                <div className="flex items-center gap-5">
                    <HiBars3BottomLeft className="text-[--color-grey-700]" size="2rem" />
                    <h1 className='text-[1.7rem] text-[--color-grey-700] font-semibold'>Description</h1>
                </div>
                {description && <Button
                    type='secondary' size='small'
                    onClick={() => {
                        setValue(description);
                        setShowEditor(true)
                    }}
                >
                    Edit
                </Button>}
            </div>
            {
                description && !showEditor ? <div className="ml-10 text-[1.5rem]" dangerouslySetInnerHTML={{ __html: description }} /> : <div className='ml-[2.5rem] mt-4'>
                    {
                        !showEditor ? <button className='bg-[--color-grey-200] text-[--color-grey-700] text-left font-semibold pl-[1.5rem] pt-[1rem] pb-[2rem] w-full cursor-pointer hover:bg-[--color-grey-200]' onClick={() => setShowEditor(true)}>
                            Add a more detailed description...
                        </button> : <div>
                            <ReactQuill modules={module} theme="snow" value={value} onChange={(value) => {
                                setValue(value);
                                console.log(value);
                            }} />
                            <div className='flex space-x-3 mt-3'>
                                <Button
                                    type='primary' size='small'
                                    onClick={updateDescription}
                                    disabled={isUpdating}
                                >
                                    Save
                                </Button>
                                <Button
                                    type='secondary' size='small'
                                    onClick={() => {
                                        setValue('');
                                        setShowEditor(false)
                                    }}
                                    disabled={isUpdating}
                                >
                                    Cancel
                                </Button>
                            </div>
                        </div>
                    }
                </div>
            }
        </div>
    )
}

export default CardDetailDescription;
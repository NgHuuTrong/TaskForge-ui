import { Checkbox, Popover, Select } from "antd"
import Button from "../../../../ui/Button"
import { useBoard } from "../../../../hooks/useBoard"
import Spinner from "../../../../ui/Spinner";
import { useCopyCard } from "../../../../hooks/useCard";
import { useState } from "react";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router";

function CopyCardPopover({ children, card }) {
    return (
        <Popover
            placement="bottomLeft"
            title={<h1 className="font-bold text-center">Copy card</h1>}
            content={<CopyPopoverContent card={card} />} trigger="click"
        >
            <>
                {children}
            </>
        </Popover>
    )
}

function CopyPopoverContent({ card }) {
    const { isLoading, board } = useBoard();
    const { isCopying, mutate: copyCard } = useCopyCard();
    const queryClient = useQueryClient();

    const [title, setTitle] = useState('');
    const [keepMembers, setKeepMembers] = useState(false);
    const [keepAttachments, setKeepAttachments] = useState(false);
    const [listId, setListId] = useState(card?.listId);

    const { boardId } = useParams();

    if (isLoading) return <Spinner />;

    return (
        <div className="space-y-4">
            <div>
                <h1 className="text-[--color-grey-600] font-bold">Title</h1>
                <textarea
                    className="border-2 outline-[--color-blue-700] min-w-[250px] bg-[--color-grey-0]"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className="space-y-2">
                <h1 className="text-[--color-grey-600] font-bold">Keep...</h1>
                <div className="flex flex-col">
                    <Checkbox
                        checked={keepMembers}
                        onChange={(e) => setKeepMembers(e.target.checked)}
                    >
                        Members ({card?.cardAssignees.length})
                    </Checkbox>
                    <Checkbox
                        checked={keepAttachments}
                        onChange={(e) => setKeepAttachments(e.target.checked)}
                    >
                        Attachments ({card?.cardAttachments.length})
                    </Checkbox>
                </div>
                <h1 className="text-[--color-grey-600] font-bold">List</h1>
                <Select
                    className="min-w-[200px]"
                    defaultValue={card?.listId}
                    style={{ width: 120 }}
                    options={board?.lists?.map((col) => {
                        return { value: col.id, label: col.name };
                    })}
                    onChange={(value) => setListId(value)}
                />
            </div>
            <Button
                classNames="mt-3" type='primary' size='small' disabled={isCopying}
                onClick={() => copyCard({
                    cardId: card?.id,
                    body: {
                        keepMembers,
                        keepAttachments,
                        listId,
                        title
                    }
                }, {
                    onSuccess: () => {
                        toast.success('Copy card successfully');
                        setTitle('');
                        setKeepAttachments(false);
                        setKeepMembers(false);
                        queryClient.invalidateQueries({ queryKey: ['board', boardId], exact: true });
                    },
                })}
            >
                Create card
            </Button>
        </div>
    )
}

export default CopyCardPopover
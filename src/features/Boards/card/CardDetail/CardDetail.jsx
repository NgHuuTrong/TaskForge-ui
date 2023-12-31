import { Modal } from 'antd'
import React, { useEffect, useState } from 'react'

import { BsArchive } from 'react-icons/bs'
import { RiAttachment2 } from 'react-icons/ri'
import { LuMoveRight } from 'react-icons/lu'
import { AiOutlineUser, AiOutlineCheckSquare, AiOutlineCopy } from 'react-icons/ai'

import CardDetailMembers from './CardDetailMembers'
import MembersPopover from './MembersPopover'
import CardDetailButton from './CardDetailButton'
import AttachmentPopover from './AttachmentPopover'
import MoveCard from '../MoveCard'
import { clearCurrentCardDetail } from '../../boardSlice'
import { useDispatch } from 'react-redux'
import CopyCardPopover from './CopyCardPopover'
import CardDetailDescription from './CardDetailDescription'
import CardDetailHeader from './CardDetailHeader'
import CardDetailActivity from './CardDetailActivity'
import CardDetailAttachments from './CardDetailAttachments'
import { useCard, useJoinCard } from '../../../../hooks/useCard'
import Spinner from '../../../../ui/Spinner'
import { useNavigate, useParams } from 'react-router-dom'
import { useQueryClient } from '@tanstack/react-query'

function CardDetail({
    openCardDetailModal,
    setOpenCardDetailModal,
    lists
}) {
    const [moveCardId, setMoveCardId] = useState(null);
    const [assignees, setAssignees] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();

    const { card, isLoading } = useCard();
    const { isJoining, mutate: joinCard } = useJoinCard();
    const queryClient = useQueryClient();

    useEffect(function () {
        if (!isLoading && card) {
            setAssignees(card?.cardAssignees?.map(cardAssignee => cardAssignee.assignee));
        }
    }, [isLoading, card])

    if (isLoading) return <Spinner />;

    return (
        <>
            <Modal
                className='rounded-xl my-8'
                width={800}
                centered
                open={openCardDetailModal}
                onOk={() => {
                    queryClient.invalidateQueries({ queryKey: ['board', card?.list.boardId], exact: true });
                    navigate(`/b/${params?.boardId}/board-detail`)
                    setOpenCardDetailModal(false);
                }}
                onCancel={() => {
                    queryClient.invalidateQueries({ queryKey: ['board', card?.list.boardId], exact: true });
                    navigate(`/b/${params?.boardId}/board-detail`)
                    setOpenCardDetailModal(false);
                }}
                okButtonProps={{ style: { display: 'none' } }}
                cancelButtonProps={{ style: { display: 'none' } }}
            >
                <div className='grid grid-cols-4 gap-5'>
                    <div className='space-y-8 col-span-3'>
                        <CardDetailHeader
                            cardName={card?.title}
                            listName={card?.list.name}
                            setMoveCardId={() => setMoveCardId(card.id)}
                        />
                        {assignees.length > 0 && <CardDetailMembers members={assignees} />}
                        <CardDetailDescription cardId={card.id} description={card.description} />
                        {(card.cardAttachments && card.cardAttachments.length > 0) && <CardDetailAttachments attachments={card.cardAttachments} />}
                        <CardDetailActivity />
                    </div>
                    <div className='space-y-10 mt-[5rem]'>
                        {
                            !assignees.some(assignee => assignee.id === 4) && <div>
                                <h1 className='text-[1.2rem] text-[--color-grey-600] font-medium'>Suggested</h1>
                                <CardDetailButton
                                    disabled={isJoining}
                                    onClick={() => {
                                        joinCard(card.id);
                                    }}
                                >
                                    <AiOutlineUser /> Join
                                </CardDetailButton>
                            </div>
                        }
                        <div>
                            <h1 className='text-[1.2rem] text-[--color-grey-600] font-medium'>Add to card</h1>
                            <MembersPopover assignees={assignees}>
                                <CardDetailButton>
                                    <AiOutlineUser /> Members
                                </CardDetailButton>
                            </MembersPopover>
                            <MembersPopover>
                                <CardDetailButton>
                                    <AiOutlineCheckSquare /> Checklist
                                </CardDetailButton>
                            </MembersPopover>
                            <AttachmentPopover>
                                <CardDetailButton>
                                    <RiAttachment2 /> Attachment
                                </CardDetailButton>
                            </AttachmentPopover>
                        </div>
                        <div>
                            <h1 className='text-[1.2rem] text-[--color-grey-600] font-medium'>Actions</h1>
                            <MembersPopover>
                                <CardDetailButton onClick={(e) => {
                                    setMoveCardId(card.id);
                                    e.stopPropagation();
                                }}>
                                    <LuMoveRight /> Move
                                </CardDetailButton>
                            </MembersPopover>
                            <CopyCardPopover card={card}>
                                <CardDetailButton>
                                    <AiOutlineCopy onClick={(e) => {
                                        e.stopPropagation();
                                    }} /> Copy
                                </CardDetailButton>
                            </CopyCardPopover>
                            <CardDetailButton onClick={(e) => {
                                e.stopPropagation();
                                dispatch(clearCurrentCardDetail());
                            }}>
                                <BsArchive /> Delete
                            </CardDetailButton>
                        </div>
                    </div>
                </div>
            </Modal>
            <MoveCard
                moveCardId={moveCardId}
                setMoveCardId={setMoveCardId}
                currentListId={card.list.id}
                boardId={card.list.boardId}
                lists={lists}
            />
        </>
    )
}

export default CardDetail
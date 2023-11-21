import { Modal } from 'antd'
import React, { useState } from 'react'

import { BsArchive } from 'react-icons/bs'
import { RiAttachment2 } from 'react-icons/ri'
import { LuMoveRight } from 'react-icons/lu'
import { AiOutlineUser, AiOutlineCheckSquare, AiOutlineCopy } from 'react-icons/ai'

import CardDetailMembers from './CardDetailMembers'
import MembersPopover from './MembersPopover'
import CardDetailButton from './CardDetailButton'
import AttachmentPopover from './AttachmentPopover'
import MoveCard from '../MoveCard'
import { useSelector } from 'react-redux'
import { clearCurrentCardDetail, deleteCard, getBoard, getCurrentCard } from '../../boardSlice'
import { useDispatch } from 'react-redux'
import CopyCardPopover from './CopyCardPopover'
import CardDetailDescription from './CardDetailDescription'
import CardDetailHeader from './CardDetailHeader'
import CardDetailActivity from './CardDetailActivity'
import CardDetailAttachments from './CardDetailAttachments'

function CardDetail() {
    const [moveCard, setMoveCard] = useState('');
    const { listId, index, detail, openModal } = useSelector(getCurrentCard);
    const { content: lists } = useSelector(getBoard(123));
    const dispatch = useDispatch();

    return (
        <>
            <Modal
                className='rounded-xl my-8'
                width={800}
                centered
                open={openModal}
                onOk={() => dispatch(clearCurrentCardDetail())}
                onCancel={() => dispatch(clearCurrentCardDetail())}
                okButtonProps={{ style: { display: 'none' } }}
                cancelButtonProps={{ style: { display: 'none' } }}
            >
                <div className='grid grid-cols-4 gap-5'>
                    <div className='space-y-8 col-span-3'>
                        <CardDetailHeader
                            cardName="Test card"
                            listName="Test list"
                            onClick={() => setMoveCard(index)}
                        />
                        <CardDetailMembers />
                        <CardDetailDescription />
                        <CardDetailAttachments />
                        <CardDetailActivity />
                    </div>
                    <div className='space-y-10 mt-[5rem]'>
                        <div>
                            <h1 className='text-[1.2rem] text-[--color-grey-600] font-medium'>Add to card</h1>
                            <MembersPopover>
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
                                    e.stopPropagation();
                                    setMoveCard(index);
                                }}>
                                    <LuMoveRight /> Move
                                </CardDetailButton>
                            </MembersPopover>
                            <CopyCardPopover>
                                <CardDetailButton>
                                    <AiOutlineCopy onClick={(e) => {
                                        e.stopPropagation();
                                    }} /> Copy
                                </CardDetailButton>
                            </CopyCardPopover>
                            <CardDetailButton onClick={(e) => {
                                e.stopPropagation();
                                dispatch(deleteCard({
                                    listId,
                                    cardId: detail.id
                                }));
                                dispatch(clearCurrentCardDetail());
                            }}>
                                <BsArchive /> Archive
                            </CardDetailButton>
                        </div>
                    </div>
                </div>
            </Modal>
            <MoveCard
                moveCard={moveCard}
                setMoveCard={setMoveCard}
                currentList={listId}
                lists={lists}
            />
        </>
    )
}

export default CardDetail
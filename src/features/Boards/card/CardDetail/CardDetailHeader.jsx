import { BsWindowDesktop } from "react-icons/bs";

function CardDetailHeader({ cardName, listName, setMoveCardId }) {
    return (
        <div>
            <div className='flex items-center gap-5 flex-wrap'>
                <BsWindowDesktop className="text-[--color-grey-700]" size="2rem" />
                <input
                    className='text-[2rem] text-[--color-grey-700] font-bold bg-transparent py-3 px-3 outline-[--color-blue-700]'
                    defaultValue={cardName}
                />
            </div>
            <p className='text-[1.5rem] text-[--color-grey-700] font-light flex gap-[0.5rem] ml-[2rem]'>
                in list
                <button className='text-[--color-grey-700] underline cursor-pointer' onClick={setMoveCardId}>
                    {listName}
                </button>
            </p>
        </div>
    )
}

export default CardDetailHeader;
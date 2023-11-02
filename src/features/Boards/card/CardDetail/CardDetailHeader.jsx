import { BsWindowDesktop } from "react-icons/bs";

function CardDetailHeader({ cardName, listName, onClick }) {
    return (
        <div>
            <div className='flex items-center gap-5 flex-wrap'>
                <BsWindowDesktop size="2rem" />
                <input
                    className='text-[2rem] text-[--color-grey-700] font-bold py-3 outline-[--color-blue-700]'
                    defaultValue={cardName}
                />
            </div>
            <p className='text-[1.5rem] font-light ml-[2rem]'>
                in list <span className='underline cursor-pointer' onClick={onClick}>{listName}</span>
            </p>
        </div>
    )
}

export default CardDetailHeader;
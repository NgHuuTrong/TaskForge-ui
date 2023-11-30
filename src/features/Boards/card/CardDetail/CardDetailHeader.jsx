import { BsWindowDesktop } from "react-icons/bs";

function CardDetailHeader({ cardName, listName, onClick }) {
    return (
        <div>
            <div className='flex items-center gap-5 flex-wrap'>
                <BsWindowDesktop className="text-[--color-grey-700]" size="2rem" />
                <input
                    className='text-[2rem] text-[--color-grey-700] font-bold bg-[--color-grey-0] py-3 px-3 outline-[--color-blue-700]'
                    defaultValue={cardName}
                />
            </div>
            <p className='text-[1.5rem] text-[--color-grey-700] font-light ml-[2rem]'>
                in list <span className='text-[--color-grey-700] underline cursor-pointer' onClick={onClick}>{listName}</span>
            </p>
        </div>
    )
}

export default CardDetailHeader;
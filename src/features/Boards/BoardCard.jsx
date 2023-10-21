import { AiOutlineStar } from 'react-icons/ai';

function BoardCard() {
    return (
        <div
            className="w-[200px] h-[95px] bg-center bg-cover rounded-md cursor-pointer"
            style={{
                backgroundImage: "url('https://trello-backgrounds.s3.amazonaws.com/SharedBackground/615x960/85db5179991ab12eb75dbf72228430ed/photo-1669183213616-6fcc8a3e2226.jpg')"
            }}
        >
            <div className="w-full h-full px-[1rem] pt-[0.5rem] text-center bg-transparent hover:bg-black/20 transition-all duration-300 relative group/item">
                <span className="text-[--color-grey-0] font-semibold">Board name</span>
                <div className='absolute bottom-[1rem] right-[1rem] invisible translate-x-3 group-hover/item:visible group-hover/item:translate-x-0 transition-all duration-300'>
                    <AiOutlineStar className='text-white hover:scale-125' />
                </div>
            </div>
        </div>
    )
}

export default BoardCard
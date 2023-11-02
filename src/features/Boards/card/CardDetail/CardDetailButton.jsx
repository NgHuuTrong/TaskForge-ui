function CardDetailButton({ children, classNames, onClick }) {
    return (
        <button
            className={`w-full flex items-center gap-2 px-3 py-[0.7rem] my-3 text-[--color-grey-800] font-medium bg-[--color-grey-200] hover:bg-[--color-grey-300] ${classNames}`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default CardDetailButton
function CreateBoardCard() {
  return (
    <button className="w-[23%] h-[9.6rem] flex items-center justify-center bg-[--color-grey-200] rounded-md cursor-pointer hover:bg-[--color-grey-300] mr-[2%] mb-[2%]">
      <span className="text-[--color-grey-500] text-[1.4rem]">Create new board</span>
    </button>
  );
}

export default CreateBoardCard;

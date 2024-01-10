import { FaCheck } from "react-icons/fa";

function ItemRow({ item, img, onClick, isMyCard }) {
  return (
    <div
      key={item.key}
      onClick={onClick}
      className="flex flex-col justify-center hover:bg-[--color-grey-200] px-[12px] py-[6px] cursor-pointer"
    >
      <div className="flex items-center justify-between font-[500]">
        <div className="flex items-center">
          {item.icon}
          {img && <img style={{ borderRadius: '0.4rem', height: 20, width: 20 }} src={img} alt="/" />}
          <p className="ml-2">{item.title}</p>
        </div>
        {(item.title === "My card" && isMyCard) && <FaCheck className="text-[--color-grey-900]" />}
      </div>
      <p className="text-[1.2rem] text-[--color-subtext] leading-[1.6rem]">{item.des}</p>
    </div>
  );
}

export default ItemRow;

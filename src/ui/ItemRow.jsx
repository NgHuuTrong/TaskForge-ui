function ItemRow({ item, img, onClick }) {
  return (
    <div
      key={item.key}
      onClick={onClick}
      className="flex flex-col justify-center hover:bg-[--color-grey-200] px-[12px] py-[6px] cursor-pointer"
    >
      <div className="flex items-center font-[500]">
        {item.icon}
        {img && <img style={{ borderRadius: '0.4rem', height: 20, width: 20 }} src={img} alt="/" />}
        <p className="ml-2">{item.title}</p>
      </div>
      <p className="text-[1.2rem] text-[--color-subtext] leading-[1.6rem]">{item.des}</p>
    </div>
  );
}

export default ItemRow;

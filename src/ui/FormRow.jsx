function FormRow({ label, note, error, children, isCompulsory = false, type = 'hor' }) {
  const types = {
    ver: 'flex flex-col gap-[0.4rem] py-[0.8rem]',
    hor: 'grid items-center grid-cols-[24rem_1fr_1.2fr] gap-[2.4rem] py-[1.2rem]',
  };
  return (
    <div className={types[type]}>
      {label && (
        <label htmlFor={children.props.id} className="text-[1.2rem] text-[--color-grey-500] font-bold">
          {label}
          {isCompulsory && <span className="text-[--color-red-700] pl-[0.2rem]">*</span>}
        </label>
      )}
      {children}
      {error && <span className="text-[1.4rem] text-[--color-red-700]">{error}</span>}
      {note && <span className="text-[1.2rem] text-[--color-grey-500]">{note}</span>}
    </div>
  );
}

export default FormRow;

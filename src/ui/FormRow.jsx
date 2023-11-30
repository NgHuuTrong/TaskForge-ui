function FormRow({ label, note, error, children, isCompulsory = false, type = 'hor' }) {
  const types = {
    ver: 'flex flex-col gap-[0.4rem] py-[0.8rem]',
    hor: 'grid items-center grid-cols-[24rem_1fr_1.2fr] gap-[2.4rem] py-[1.2rem]',
  };
  return (
    <div className={types[type]}>
      {label && (
        <label htmlFor={children.props.id} className="flex items-center gap-2 text-[1.2rem] font-bold">
          {label}
          {isCompulsory && <span className="text-[--color-red-400]">*</span>}
        </label>
      )}
      {children}
      {error && <div className="flex items-center gap-4 text-[1.4rem] text-[--color-red-400]">{error}</div>}
      {note && <div className="flex items-center gap-4 text-[1.2rem] text-[--color-subtext]">{note}</div>}
    </div>
  );
}

export default FormRow;

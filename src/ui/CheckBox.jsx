function CheckBox({
  checked,
  onChange,
  disabled = false,
  id,
  children,
  size = '2.4rem',
}) {
  return (
    <div className="flex items-center gap-[1rem]">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className={`h-[${size}] w-[${size}] origin-[0] accent-[--color-brand-600] outline-offset-[2px] disabled:accent-[--color-brand-600]`}
      />
      <label
        className="flex items-center gap-[0.8rem]"
        htmlFor={!disabled ? id : ''}
      >
        {children}
      </label>
    </div>
  );
}

export default CheckBox;

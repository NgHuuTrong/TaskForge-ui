function Input({ classNames = '', ...props }) {
  return (
    <input
      className={`rounded-[--border-radius-sm] border-[1px] border-[--color-grey-300] bg-[--color-grey-0] px-[1.2rem] py-[0.8rem] [box-shadow:--shadow-sm] ${classNames}`}
      {...props}
    />
  );
}

export default Input;

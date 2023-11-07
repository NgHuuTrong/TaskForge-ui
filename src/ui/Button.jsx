import { Link } from 'react-router-dom';

function Button({ children, disabled = false, to, size = 'medium', type = 'primary', classNames = '', onClick }) {
  const base =
    'flex items-center border-[none] rounded-[--border-radius-sm] [box-shadow:var(--shadow-sm)] font-medium ';

  const sizes = {
    small: 'text-[1.2rem] px-[0.8rem] py-[0.4rem] ',
    normal: 'text-[1.4rem] px-[1.2rem] py-[0.8rem] ',
    medium: 'text-[1.4rem] px-[1.6rem] py-[1.2rem] ',
    large: 'text-[1.6rem] px-[2.4rem] py-[1.2rem] ',
  };

  const types = {
    primary: 'text-[--color-grey-50] bg-[--color-brand-500] hover:bg-[--color-brand-400] ',
    secondary:
      'text-[--color-grey-700] bg-[--color-grey-200] border-[1px] border-[solid] border-[--color-grey-200] hover:bg-[--color-grey-300] ',
    danger: 'text-[--color-red-100] bg-[--color-red-700] hover:bg-[--color-red-800] ',
    icon: 'text-[--color-grey-500] bg-none [transition:all_0.2s] hover:bg-[--color-grey-200] ',
    text: 'text-[--color-brand-500] text-center [transition:all_0.3s] bg-none hover:text-[--color-brand-400] active:text-[--color-brand-600] ',
  };

  const allClass = base + sizes[size] + types[type] + classNames;

  if (to)
    return (
      <Link to={to} className={allClass}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={allClass}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={allClass}>
      {children}
    </button>
  );
}

export default Button;

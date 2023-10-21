import { Link } from 'react-router-dom';

function Button({
  children,
  disabled = false,
  to,
  size = 'medium',
  type = 'primary',
  classNames = '',
  onClick,
}) {
  const base =
    'border-[none] rounded-[--border-radius-sm] [box-shadow:var(--shadow-sm)] ';

  const sizes = {
    small:
      'text-[1.2rem] px-[0.8rem] py-[0.4rem] uppercase font-semibold text-center ',
    medium: 'text-[1.4rem] px-[1.6rem] py-[1.2rem] font-medium ',
    large: 'text-[1.6rem] px-[2.4rem] py-[1.2rem] font-medium ',
  };

  const types = {
    primary:
      base +
      'text-[--color-brand-50] bg-[--color-brand-600] hover:bg-[--color-brand-700] ',
    secondary:
      base +
      'text-[--color-grey-700] bg-[--color-grey-200] border-[1px] border-[solid] border-[--color-grey-200] hover:bg-[--color-grey-300] ',
    danger:
      base +
      'text-[--color-red-100] bg-[--color-red-700] hover:bg-[--color-red-800]',
    icon: 'bg-none border-[none] rounded-[--border-radius-sm] [transition:all_0.2s] hover:bg-[--color-grey-100]',
    text: 'text-[--color-brand-500] font-medium text-center [transition:all_0.3s] bg-none border-[none] rounded-[--border-radius-sm] hover:text-[--color-brand-700] active:text-[--color-brand-800]',
  };

  const allClass = sizes[size] + types[type] + classNames;

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
